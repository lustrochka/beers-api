import { getBeer } from '../../handlers/getBeer';
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {

    if (method === 'GET') {
      const { code, message, contentType } = getBeer(req.query.id);
      res.status(code).send(message);
  }
}
