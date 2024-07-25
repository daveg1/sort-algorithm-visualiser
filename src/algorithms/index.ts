import { CanvasService } from "../classes/CanvasService";
import { State } from "../classes/State";
import { BubbleSort } from "./BubbleSort";
import { InsertionSort } from "./InsertionSort";
import { Sort } from "./Sort";

export type AlgoNames = "bubble" | "insertion";

/**
 * Map of sorting algorithms
 */
export const algoMap: Map<AlgoNames, Sort> = new Map();
algoMap.set("bubble", new BubbleSort());
algoMap.set("insertion", new InsertionSort());

/**
 * The dropdown to select a sorting algorithm
 */
const dropdown =
  document.querySelector<HTMLSelectElement>("#algorithm-select")!;

// Generate options
algoMap.forEach((_, k) => {
  const option = document.createElement("option");
  option.value = k;
  option.textContent = `${k} sort`;
  dropdown?.append(option);
});

dropdown.addEventListener("change", () => {
  State.setAlgo(dropdown.value as AlgoNames);

  if (!State.isSorting) {
    State.resetStats();
    CanvasService.drawData(State.data);
  }
});
