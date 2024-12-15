import beers from '../data/data.json';
import { VercelRequest, VercelResponse } from '@vercel/node';

export function getBeers(req: VercelRequest) {
  const { page, pageSize, search } = req.query;

  const parsedPage = Number(page) || 1;
  const parsedPageSize = Number(pageSize) || 10;
  const searchWord = search?.toString().toLowerCase().trim();

  let beersArray = beers;
  if (searchWord) beersArray = beers.filter((beer) => beer.name.toLowerCase().includes(searchWord));

  const startIndex = parsedPageSize * (parsedPage - 1);
  const resultBeers = beersArray.slice(startIndex, startIndex + parsedPageSize);

  return { data: resultBeers, total: beersArray.length };
  return beers;
}
