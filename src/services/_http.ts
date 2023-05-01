type TMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function http<TIn, TOut>(
  method: TMethod,
  url: string,
  body?: TIn
): Promise<TOut> {
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw res;

  return await res.json();
}
