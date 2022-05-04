import { BubbleSort } from "./src/sort/BubbleSort";

const bubbleSort = new BubbleSort();

bubbleSort.addEventListener("sort", (e) => {
  console.log(e.detail);
});

bubbleSort.sort([1, 2, 3]);
