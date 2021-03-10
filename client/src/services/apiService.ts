export const isServer = typeof window === "undefined";

interface IParams {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  searchParameters?:
    | string[][]
    | Record<string, string>
    | string
    | URLSearchParams;
  data?: any;
}

export class ApiService {
  private _apiBase?: string;
  private fetch: typeof fetch;

  constructor() {
    this.fetch = isServer ? require("node-fetch") : window.fetch.bind(window);
  }

  init(apiBase: string) {
    this._apiBase = apiBase;
  }

  async makeApiRequest(
    path: string,
    params?: IParams,
    isResExpected = true
  ): Promise<any> {
    const defaultParams = { method: "GET" };
    const { method, data, searchParameters } = {
      ...defaultParams,
      ...params,
    };
    if (searchParameters != null) {
      path += "?" + new URLSearchParams(searchParameters).toString();
    }
    const url = new URL(path, this._apiBase);
    return this.fetch(url.href, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (response.ok) {
        return isResExpected ? response.json() : null;
      } else {
        const err = await response.json();
        throw new Error(err?.message ?? "Unknown error");
      }
    });
  }
}

export default new ApiService();
