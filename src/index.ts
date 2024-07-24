import "./index.css";
import { BubbleSort, InsertionSort, Sort } from "./algorithms";
import { Canvas } from "./classes/Canvas";
import { DrawQueue } from "./classes/DrawQueue";
import { SortEvent } from "./classes/SortEvent";
import { State } from "./classes/State";

const canvasElem = document.querySelector("#canvas") as HTMLCanvasElement;
const resetButton = document.querySelector(
  "#reset-button",
) as HTMLButtonElement;
const sortButton = document.querySelector("#sort-button") as HTMLButtonElement;
const algorithmSelect = document.querySelector(
  "#algorithm-select",
) as HTMLSelectElement;

const canvas = new Canvas(canvasElem);
const drawQueue = new DrawQueue();
let isSorting = false;

const algorithms: Map<string, Sort> = new Map();
algorithms.set("bubble", new BubbleSort());
algorithms.set("insertion", new InsertionSort());

let algo = algorithms.get("bubble")!;

algorithms.forEach((_, k) => {
  const option = document.createElement("option");
  option.value = k;
  option.textContent = `${k} sort`;
  algorithmSelect?.append(option);
});

algorithmSelect.addEventListener("change", () => {
  algo = algorithms.get(algorithmSelect.value)!;

  if (!isSorting) {
    State.resetStats();
    canvas.drawData(State.data);
  }
});

canvas.drawData(State.data);
State.renderStats();

sortButton?.addEventListener("click", () => {
  if (isSorting) {
    return;
  }

  algo.addEventListener("sort", (e) => {
    const event = (e as SortEvent).detail;
    drawQueue.append(event);
  });

  isSorting = true;
  const sortedData = algo.sort(State.data);
  console.log(sortedData);
  canvas.updateCanvas(drawQueue).then(() => {
    isSorting = false;
  });
});

resetButton.addEventListener("click", (_) => {
  State.resetStats();
  canvas.drawData(State.data);
});
