import http, { IncomingMessage, ServerResponse } from 'http';
import { getBeer } from './handlers/getBeer';
import { getBeers } from './handlers/getBeers';

const baseUrl = '/api/beers';

const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  const { method, url } = req;

  console.log(url);

  if (!url) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid URL');
  } else {
    try {
      if ((url === baseUrl || url?.startsWith(baseUrl + '?')) && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const message = getBeers(req);
        res.end(JSON.stringify(message));
      } else if (url?.startsWith(baseUrl + '/') && method === 'GET') {
        const id = url.split('/')[3];
        const { code, message, contentType } = getBeer(id);
        res.writeHead(code, { 'Content-Type': contentType });
        res.end(message);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
      }
    } catch {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }
};

export const server = http.createServer(requestHandler);
