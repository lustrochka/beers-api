import { getBeers } from '../../handlers/getBeers';
import { IncomingMessage, ServerResponse } from 'http';

export async function handler(res: ServerResponse, req: IncomingMessage) {
  console.log(req);
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const message = getBeers(req);
    res.end(JSON.stringify(message));
  }
}
