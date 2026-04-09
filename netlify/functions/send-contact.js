import { submitContactInquiry } from '../../backend/contact.js';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ error: 'Method not allowed.' }),
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const result = await submitContactInquiry(body, process.env);

    return {
      statusCode: result.statusCode,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(result.body),
    };
  } catch (error) {
    console.error('Netlify contact function failed', error);

    return {
      statusCode: error.statusCode || 500,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        error: error.message || 'Unexpected server error.',
        details: error.details || null,
      }),
    };
  }
}
