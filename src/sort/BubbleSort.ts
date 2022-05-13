import { Sort } from './Sort'

export class BubbleSort extends Sort {
  sort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap adjacent items
          let temp = array[j + 1]
          array[j + 1] = array[j]
          array[j] = temp
          // Emit whenever a change is made
          this.emit(array)
        }
      }
    }
    return array
  }
}
