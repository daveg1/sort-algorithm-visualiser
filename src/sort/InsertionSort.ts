import { Sort } from './Sort'

export class InsertionSort extends Sort {
  sort(array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
      let j = i
      while (array[j] < array[j - 1]) {
        let temp = array[j]
        array[j] = array[j - 1]
        array[j - 1] = temp
        this.emitSort(array)
        j--
      }
    }

    return array
  }
}
