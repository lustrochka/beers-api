/*import beers from '../data/data.json';
import { IncomingMessage } from 'http';
import { parse } from 'url';*/
import { VercelRequest, VercelResponse } from '@vercel/node';

export function getBeers(req: VercelRequest/*IncomingMessage*/) {
  /*const { query } = parse(req.url || '', true);
  const { page, pageSize, search } = query;

  const parsedPage = Number(page) || 1;
  const parsedPageSize = Number(pageSize) || 10;
  const searchWord = search?.toString().toLowerCase().trim();

  let beersArray = beers;
  if (searchWord) beersArray = beers.filter((beer) => beer.name.toLowerCase().includes(searchWord));

  const startIndex = parsedPageSize * (parsedPage - 1);
  const resultBeers = beersArray.slice(startIndex, startIndex + parsedPageSize);

  return { message: resultBeers, total: beersArray.length };*/
  return req;
}
