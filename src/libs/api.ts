export const fetchApi = <T>(path: string): Promise<T> => {
  type RequestParams = {
    'X-API-KEY': string
    'X-GLOBAL-DRAFT-KEY': string
  } | {
    'X-API-KEY': string
  }
  const params: { headers: RequestParams } = {
    headers: process.env.IS_DRAFT
      ? {'X-API-KEY': process.env.MICROCMS_API_KEY!, "X-GLOBAL-DRAFT-KEY": process.env.MICROCMS_DRAFT_KEY! }
      : {'X-API-KEY': process.env.MICROCMS_API_KEY!},
  };

  return fetch(`${process.env.MICROCMS_HOST!}${path}`, params).then((res) => res.json())
}
