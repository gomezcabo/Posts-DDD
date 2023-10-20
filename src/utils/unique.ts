export function unique<T>(collection: T[]): T[] {
  return [...new Set(collection)];
}
