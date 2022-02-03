import axios from 'axios';

const API_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

interface Count{
  count: number,
}

export interface Artigo{
  id: number,
  title: string,
  url: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: Date,
  updatedAt: Date,
  featured: boolean,
  launches: any[],
  events: any[],
}

export function artigoService(offset : number, limit = 10): Promise<Artigo[]> {
  const queryParam = `_sort=id&_start=${offset}&_limit=${limit}`;
  return axios.get(`${API_URL}?${queryParam}`)
    .then((a) => a.data as Artigo[])
    .catch((b) => {
      console.log(`erro ao obter artigo: ${b}`);
      return [];
    });
}

export function totalArtigos(): Promise<number> {
  return axios.get(`${API_URL}/count`)
    .then((a) => a.data as number)
    .catch((b) => {
      console.log(`erro : ${b}`);
      return 0;
    });
}
