import { getBeers } from '../../handlers/getBeers';
import type { VercelRequest, VercelResponse } from '@vercel/node'

export async function handler(res: VercelResponse, req: VercelRequest) {
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
];
  if (req.method === 'GET') {
    res.status(200).json(products);
    /*res.writeHead(200, { 'Content-Type': 'application/json' });
    const message = getBeers(req);
    res.end(JSON.stringify(message));*/
  }
}
