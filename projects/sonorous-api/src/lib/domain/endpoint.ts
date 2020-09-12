export class Endpoint {
  public static API(model: string): string {
    return `/api/${model}`;
  }
}
