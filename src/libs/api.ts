export const fetchApi = <T>(path: string): Promise<T> => {
  const key = {
    headers: {'X-API-KEY': process.env.MICROCMS_API_KEY!},
  };

  return fetch(`${process.env.MICROCMS_HOST!}${path}`, key).then((res) => res.json())
}
