import { getBeers } from '../../handlers/getBeers';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { applyCors } from '../../utils/cors';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    applyCors(req, res);
    const message = getBeers(req);
    res.status(200).json(message);
  } else if (req.method === 'OPTIONS') {
    res.status(200).end();
  }
}
