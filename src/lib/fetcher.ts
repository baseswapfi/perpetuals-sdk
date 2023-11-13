export function arrayURLFetcher(urlArr: string[]) {
  const fetcher = (url: string) => fetch(url).then(res => res.json());
  return Promise.all(urlArr.map(fetcher));
}

export function jsonFetcher(url: string) {
  // @ts-ignore
  return fetch(url).then(res => res.json());
}
