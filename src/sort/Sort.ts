import { SortEvent } from '../classes/SortEvent'

export class Sort extends EventTarget {
  emitSort(array: number[]) {
    this.dispatchEvent(new SortEvent(array))
  }
}
