import beers from '../data/data.json';

export function getBeer(id: string) {
  const beer = beers.find((item) => item.id === id);

  if (!beer) return { code: 404, message: "Beer doesn't exist", contentType: 'text/plain' };

  return { code: 200, message: JSON.stringify(beer), contentType: 'application/json' };
}
