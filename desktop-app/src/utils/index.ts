// @ts-ignore
export function sum(a: number, b: number, c: number | undefined = undefined) {
  if (!c) return a + b;

  return a + b + c;
}
