const allowedOrigins = ['http://localhost:5173'];
import type { VercelRequest, VercelResponse } from '@vercel/node';

export function applyCors(req: VercelRequest, res: VercelResponse) {
  if (req.headers.origin && allowedOrigins.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
