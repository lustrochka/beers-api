import { getBeer } from '../../handlers/getBeer';
import type { VercelRequest, VercelResponse } from '@vercel/node'

export async function handler(req: VercelRequest, res: VercelResponse) {
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
