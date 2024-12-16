import { getBeer } from '../../handlers/getBeer';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { applyCors } from '../../utils/cors';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    applyCors(req, res);
    const { code, message } = getBeer(req.query.id as string);
    res.status(code).send(message);
  } else if (req.method === 'OPTIONS') {
    res.status(200).end();
  }
}
