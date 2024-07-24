/**
 * Generates a dataset of a given size and range of values
 *
 * @param length total length of the dataset
 * @param startRange start of numerical range
 * @param endRange end of numerical range
 * @returns
 */
export function generateData(length: number, startRange = 0, endRange = 1) {
  return Array.from({ length }).map(() => {
    const random = Math.floor(Math.random() * endRange);
    return Math.max(startRange, Math.min(random, endRange));
  });
}
