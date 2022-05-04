export function randomArray(length, start = 0, end = 1) {
  return Array.from({ length }).map(() => {
    const random = Math.floor(Math.random() * end);
    return Math.max(start, Math.min(random, end));
  });
}

export function formatValue(value, max) {
  return Math.floor(max * (value / 100));
}
