import { getBeer } from '../../handlers/getBeer';
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  //const { method, url } = req;

  const { id } = req.query;
  res.status(200).json({r: id});

  /*if (!url) {
    res.status(404).send('Invalid URL');
  } else {
    if (method === 'GET') {
      const id = url.split('/')[3];
      const { code, message, contentType } = getBeer(id);
      res.status(code).send(message);
    }
  }*/
}
