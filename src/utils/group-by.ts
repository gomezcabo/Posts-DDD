export function groupBy<T, K extends keyof T>(collection: T[], fieldBy: K) {
  const result = collection.reduce((acc, item) => {
    const key = item[fieldBy] as PropertyKey;
    acc[key] = item;
    return acc;
  }, {} as Record<PropertyKey, T>);
  return result;
}
