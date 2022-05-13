export class SortEvent extends CustomEvent<any> {
  constructor(data: number[]) {
    super('sort', { detail: data })
  }
}
