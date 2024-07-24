/**
 * A custom event used by sort algorithms to emit their state at one step during the sorting process.
 */
export class SortEvent extends CustomEvent<number[]> {
  constructor(data: number[]) {
    super("sort", { detail: [...data] });
  }
}
