import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { submitContactInquiry } from './contact.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = normalize(join(__dirname, '..'));
const distDir = join(rootDir, 'dist');
const port = Number(process.env.PORT || 3001);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
};

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(body));
}

async function readJsonBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString('utf8');
  return rawBody ? JSON.parse(rawBody) : {};
}

async function handleContactRequest(request, response) {
  if (request.method !== 'POST') {
    sendJson(response, 405, { error: 'Method not allowed.' });
    return;
  }

  try {
    const body = await readJsonBody(request);
    const result = await submitContactInquiry(body);
    sendJson(response, result.statusCode, result.body);
  } catch (error) {
    console.error('Contact request failed', error);
    sendJson(response, error.statusCode || 500, {
      error: error.message || 'Unexpected server error.',
      details: error.details || null,
    });
  }
}

async function serveStaticFile(requestPath, response) {
  const safePath = normalize(requestPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = join(distDir, safePath);

  try {
    const fileStats = await stat(filePath);
    const resolvedPath = fileStats.isDirectory() ? join(filePath, 'index.html') : filePath;
    const contentType = mimeTypes[extname(resolvedPath)] || 'application/octet-stream';
    response.writeHead(200, { 'Content-Type': contentType });
    createReadStream(resolvedPath).pipe(response);
    return true;
  } catch {
    return false;
  }
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);

  if (url.pathname === '/api/contact') {
    await handleContactRequest(request, response);
    return;
  }

  const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname;
  const didServeAsset = await serveStaticFile(requestedPath, response);

  if (didServeAsset) {
    return;
  }

  const spaEntrypoint = join(distDir, 'index.html');

  if (existsSync(spaEntrypoint)) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    createReadStream(spaEntrypoint).pipe(response);
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Not found');
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
