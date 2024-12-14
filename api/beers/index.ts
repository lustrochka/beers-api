//import { getBeers } from '../../handlers/getBeers';
import type { VercelRequest, VercelResponse } from '@vercel/node'

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
];
export async function handler(res: VercelResponse, req: VercelRequest) {
  if (req.method === 'GET') {
    /*const message = getBeers(req);*/
    res.status(200).json(products);
  }
}

