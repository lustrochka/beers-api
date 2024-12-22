const allowedOrigins = ['https://beers-data.netlify.app'];
import type { VercelRequest, VercelResponse } from '@vercel/node';

export function applyCors(req: VercelRequest, res: VercelResponse) {
  if (req.headers.origin && allowedOrigins.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
