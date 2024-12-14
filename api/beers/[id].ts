/*import { getBeer } from '../../handlers/getBeer';
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
}*/

import { VercelRequest, VercelResponse } from '@vercel/node';

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'GET') {
        res.status(200).json(products);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
