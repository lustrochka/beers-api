import { VercelRequest, VercelResponse } from '@vercel/node';

const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'GET') {
        res.status(200).json(products);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
