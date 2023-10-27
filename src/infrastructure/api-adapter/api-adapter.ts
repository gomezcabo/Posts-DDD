import { injectable } from "inversify";

@injectable()
export class ApiAdapter {
  private API_URL = "https://dummyjson.com";

  async get<T>(path: string) {
    const response = await fetch(`${this.API_URL}${path}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    return (await response.json()) as T;
  }
}
