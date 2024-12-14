import { getBeer } from '../../handlers/getBeer';
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'GET') {
      const { code, message } = getBeer(req.query.id as string);
      res.status(code).send(message);
  }
}
