const API_URL = "https://dummyjson.com";

export async function apiFetch<T>(path: string) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return (await response.json()) as T;
}
