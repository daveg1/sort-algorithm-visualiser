/**
 * Utility to pause execution for a given time in ms
 * @param ms
 * @returns
 */
export function pause(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
