import { getBeer } from '../../handlers/getBeer';
import { IncomingMessage, ServerResponse } from 'http';

export async function handler(res: ServerResponse, req: IncomingMessage) {
  const { method, url } = req;

  if (!url) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid URL');
  } else {
    if (method === 'GET') {
      const id = url.split('/')[3];
      const { code, message, contentType } = getBeer(id);
      res.writeHead(code, { 'Content-Type': contentType });
      res.end(message);
    }
  }
}
