export class BubbleSort extends EventTarget {
  sort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap adjacent items
          let temp = array[j + 1]
          array[j + 1] = array[j]
          array[j] = temp
          // Emit whenever a change is made
          this.dispatchEvent(new CustomEvent('sort', { detail: [...array] }))
        }
      }
    }
    return array
  }
}
