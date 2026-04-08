import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Briefcase, Building2, Mail, Phone, Send, ShieldCheck, UserRound } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'done' | 'error' | 'missing-config';

const emailJsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
};

const contactEmail = 'manojlo.share@gmail.com';

const Slide10Content: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const isConfigured =
    Boolean(emailJsConfig.publicKey) &&
    Boolean(emailJsConfig.serviceId) &&
    Boolean(emailJsConfig.templateId);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    if (!isConfigured) {
      setStatus('missing-config');
      return;
    }

    const formData = new FormData(formRef.current);
    const payload = {
      from_name: String(formData.get('from_name') ?? ''),
      company_name: String(formData.get('company_name') ?? ''),
      job_title: String(formData.get('job_title') ?? ''),
      reply_to: String(formData.get('reply_to') ?? ''),
      mobile: String(formData.get('mobile') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    setStatus('sending');

    try {
      await emailjs.sendForm(
        emailJsConfig.serviceId!,
        emailJsConfig.templateId!,
        formRef.current,
        { publicKey: emailJsConfig.publicKey! },
      );

      if (emailJsConfig.autoReplyTemplateId && payload.reply_to) {
        await emailjs.send(
          emailJsConfig.serviceId!,
          emailJsConfig.autoReplyTemplateId,
          {
            to_email: payload.reply_to,
            to_name: payload.from_name,
            from_name: 'JustImprove tim',
            company_name: payload.company_name,
            confirmation_subject: 'Potvrda prijema upita / Inquiry received',
            confirmation_sr:
              'Hvala sto ste nas kontaktirali. Vas upit je uspesno primljen i nas tim ce vam se javiti u najkracem mogucem roku.',
            confirmation_en:
              'Thank you for contacting us. We have received your inquiry and our team will get back to you as soon as possible.',
          },
          { publicKey: emailJsConfig.publicKey! },
        );
      }

      setStatus('done');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS send failed', error);
      setStatus('error');
    }
  };

  const statusMessage =
    status === 'done'
      ? 'Hvala sto ste nas kontaktirali. Vas upit je primljen i uskoro vam se javljamo. Thank you for reaching out. We have received your inquiry and will respond shortly.'
      : status === 'error'
        ? 'Poruka trenutno nije poslata. Pokusajte ponovo ili nam pisite direktno na manojlo.share@gmail.com.'
        : status === 'missing-config'
          ? 'Kontakt forma jos nije povezana. Dodajte EmailJS kljuceve u Netlify environment variables.'
          : null;

  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-4 py-3 overflow-y-auto">
      <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-5">
        <div className="text-center space-y-1.5 sm:space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors">
            Kontaktirajte nas
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white max-w-3xl mx-auto px-2 transition-colors">
            Ako zelite kratak razgovor o tome kako JustImprove moze da unapredi proizvodnju, prijavu problema i pracenje akcija, posaljite nam upit i javljamo se u najkracem roku.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.88fr_1.12fr] gap-4 sm:gap-5 items-center">
          <div className="w-full max-w-md mx-auto rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-4 sm:p-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <div className="space-y-4 text-center">
              <div className="space-y-2.5 flex flex-col items-center">
                <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-100">
                  <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.2} />
                  Demo upit
                </div>
                <h3 className="max-w-sm text-xl sm:text-2xl font-bold leading-tight">
                  Zatvorimo prezentaciju konkretnim sledecim korakom
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-slate-200">
                  Posaljite nam nekoliko osnovnih informacija o vama i kompaniji, kako bi zajedno poboljsali efikasnost vase kompanije
                </p>
              </div>


              <div className="mx-auto w-full max-w-xs space-y-3 rounded-3xl border border-white/10 bg-white/10 p-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="h-5 w-5 text-blue-100" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">Email</p>
                    <a href={`mailto:${contactEmail}`} className="text-sm sm:text-base text-white hover:text-blue-200 transition-colors">
                      {contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-[28px] p-4 sm:p-6 transition-colors shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors">Posaljite upit</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors">
                  Ostavite osnovne podatke i kratak opis potrebe, a nas tim ce vam se javiti sa narednim koracima.
                </p>
              </div>
              <div className="hidden sm:flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 dark:bg-slate-700 dark:text-slate-200">
                Kontakt forma
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors">
                    Ime i prezime
                  </label>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" strokeWidth={2} />
                    <input
                      type="text"
                      id="contact-name"
                      name="from_name"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      placeholder="Vase ime i prezime"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-company" className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors">
                    Naziv kompanije
                  </label>
                  <div className="relative">
                    <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" strokeWidth={2} />
                    <input
                      type="text"
                      id="contact-company"
                      name="company_name"
                      required
                      autoComplete="organization"
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      placeholder="Naziv kompanije"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="contact-job-title" className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors">
                    Pozicija
                  </label>
                  <div className="relative">
                    <Briefcase className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" strokeWidth={2} />
                    <input
                      type="text"
                      id="contact-job-title"
                      name="job_title"
                      required
                      autoComplete="organization-title"
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      placeholder="Npr. direktor proizvodnje"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" strokeWidth={2} />
                    <input
                      type="email"
                      id="contact-email"
                      name="reply_to"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      placeholder="ime@kompanija.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="contact-mobile" className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors">
                  Mobilni (opciono)
                </label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" strokeWidth={2} />
                  <input
                    type="tel"
                    id="contact-mobile"
                    name="mobile"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    placeholder="+381 6x xxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1 block text-xs font-medium text-gray-700 dark:text-gray-300 transition-colors">
                  Kratak opis
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white resize-none"
                  placeholder="Ukratko opisite potrebu, izazov ili tip demo sastanka koji zelite."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                <Send className="h-4 w-4" strokeWidth={2} />
                {status === 'sending' ? 'Slanje u toku...' : 'Posaljite upit'}
              </button>

              {statusMessage ? (
                <div
                  aria-live="polite"
                  className={`rounded-2xl border px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    status === 'done'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200'
                      : 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-200'
                  }`}
                >
                  {statusMessage}
                </div>
              ) : null}

              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-[11px] sm:text-xs leading-relaxed text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                Vase podatke koristimo iskljucivo za obradu upita i organizaciju daljeg razgovora.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10Content;
