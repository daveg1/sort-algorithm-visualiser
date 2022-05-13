export class SortEvent extends CustomEvent<number[]> {
  constructor(data: number[]) {
    super('sort', { detail: [...data] })
  }
}
