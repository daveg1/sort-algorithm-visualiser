import { SortEvent } from '../classes/SortEvent'

export class Sort extends EventTarget {
  emit(array: number[]) {
    this.dispatchEvent(new SortEvent(array))
  }
}
