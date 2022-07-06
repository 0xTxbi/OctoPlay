export const fetcher = async (headerValue) =>
  await fetch({
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${headerValue}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
