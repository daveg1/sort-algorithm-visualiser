import { SortEvent } from '../classes/SortEvent'

export abstract class Sort extends EventTarget {
  protected emitSort(array: number[]) {
    this.dispatchEvent(new SortEvent(array))
  }

  abstract sort(array: number[]): number[]
}
