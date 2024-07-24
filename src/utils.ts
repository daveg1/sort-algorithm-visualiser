export function randomArray(length: number, start = 0, end = 1) {
  return Array.from({ length }).map(() => {
    const random = Math.floor(Math.random() * end);
    return Math.max(start, Math.min(random, end));
  });
}

export function formatValue(value: number, max: number) {
  return Math.floor(max * (value / 100));
}

export function pause(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
