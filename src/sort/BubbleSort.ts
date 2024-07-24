import { Sort } from "./Sort";

export class BubbleSort extends Sort {
  sort(array: number[]): number[] {
    let swapped = false;

    for (let i = 0; i < array.length; i++) {
      swapped = false;
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap adjacent items
          let temp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = temp;

          swapped = true;
          // Emit whenever a change is made
          this.emitSort(array);
        }
      }

      // No swaps made, no need to continue
      if (!swapped) {
        return array;
      }
    }
    return array;
  }
}
