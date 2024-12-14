import { getBeers } from '../../handlers/getBeers';
import type { VercelRequest, VercelResponse } from '@vercel/node'

export async function handler(res: VercelResponse, req: VercelRequest) {
  console.log(req);
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const message = getBeers(req);
    res.end(JSON.stringify(message));
  }
}
