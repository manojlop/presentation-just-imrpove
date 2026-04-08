const contactEmail = process.env.CONTACT_EMAIL || 'manojlo.share@gmail.com';

const confirmationSubject = 'Potvrda prijema upita / Inquiry received';
const confirmationMessageSr =
  'Hvala sto ste nas kontaktirali. Vas upit je uspesno primljen i nas tim ce vam se javiti u najkracem mogucem roku.';
const confirmationMessageEn =
  'Thank you for contacting us. We have received your inquiry and our team will get back to you as soon as possible.';

const requiredConfigKeys = [
  'EMAILJS_PUBLIC_KEY',
  'EMAILJS_SERVICE_ID',
  'EMAILJS_TEMPLATE_ID',
];

function readConfig(env = process.env) {
  return {
    publicKey: env.EMAILJS_PUBLIC_KEY,
    serviceId: env.EMAILJS_SERVICE_ID,
    templateId: env.EMAILJS_TEMPLATE_ID,
    autoReplyTemplateId: env.EMAILJS_AUTOREPLY_TEMPLATE_ID,
  };
}

function getMissingConfigKeys(config) {
  return requiredConfigKeys.filter((key) => !config[keyToConfigKey(key)]);
}

function keyToConfigKey(key) {
  if (key === 'EMAILJS_PUBLIC_KEY') return 'publicKey';
  if (key === 'EMAILJS_SERVICE_ID') return 'serviceId';
  return 'templateId';
}

function sanitizeField(value) {
  return String(value ?? '').trim();
}

function normalizePayload(body = {}) {
  return {
    from_name: sanitizeField(body.from_name),
    company_name: sanitizeField(body.company_name),
    job_title: sanitizeField(body.job_title),
    reply_to: sanitizeField(body.reply_to),
    mobile: sanitizeField(body.mobile),
    message: sanitizeField(body.message),
  };
}

function validatePayload(payload) {
  return (
    Boolean(payload.from_name) &&
    Boolean(payload.company_name) &&
    Boolean(payload.job_title) &&
    Boolean(payload.reply_to) &&
    Boolean(payload.message)
  );
}

async function sendEmail({ publicKey, serviceId, templateId, templateParams }) {
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: publicKey,
      service_id: serviceId,
      template_id: templateId,
      template_params: templateParams,
    }),
  });

  if (response.ok) {
    return;
  }

  const message = await response.text();
  throw new Error(`EmailJS request failed with status ${response.status}: ${message}`);
}

export async function submitContactInquiry(body, env = process.env) {
  const payload = normalizePayload(body);

  if (!validatePayload(payload)) {
    return {
      statusCode: 400,
      body: { error: 'Invalid contact form payload.' },
    };
  }

  const config = readConfig(env);
  const missingConfigKeys = getMissingConfigKeys(config);

  if (missingConfigKeys.length > 0) {
    return {
      statusCode: 503,
      body: {
        error: 'Contact form is not configured.',
        missingConfigKeys,
      },
    };
  }

  await sendEmail({
    publicKey: config.publicKey,
    serviceId: config.serviceId,
    templateId: config.templateId,
    templateParams: payload,
  });

  if (config.autoReplyTemplateId && payload.reply_to) {
    await sendEmail({
      publicKey: config.publicKey,
      serviceId: config.serviceId,
      templateId: config.autoReplyTemplateId,
      templateParams: {
        to_email: payload.reply_to,
        to_name: payload.from_name,
        from_name: 'JustImprove tim',
        company_name: payload.company_name,
        contact_email: contactEmail,
        confirmation_subject: confirmationSubject,
        confirmation_sr: confirmationMessageSr,
        confirmation_en: confirmationMessageEn,
      },
    });
  }

  return {
    statusCode: 200,
    body: { ok: true },
  };
}
