import { getBeers } from '../../handlers/getBeers';
import type { VercelRequest, VercelResponse } from '@vercel/node'

export async function handler(res: VercelResponse, req: VercelRequest) {
  if (req.method === 'GET') {
    const message = getBeers(req);
    res.status(200).json(message);
  }
}
