import "./index.css";

import { pause, randomArray } from "./utils.js";
import { Canvas } from "./classes/Canvas.js";
import { SortEvent } from "./classes/SortEvent.js";
import { DrawQueue } from "./classes/DrawQueue";
import { BubbleSort } from "./sort/BubbleSort.js";
import { InsertionSort } from "./sort/InsertionSort";
import { Sort } from "./sort/Sort";

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
const DELAY = 10;

const algorithms: Map<string, Sort> = new Map();
algorithms.set("bubble", new BubbleSort());
algorithms.set("insertion", new InsertionSort());

let sortingAlgo = algorithms.get("bubble")!;

// @ts-ignore
algorithms.forEach((v, k) => {
  const option = document.createElement("option");
  option.value = k;
  option.textContent = `${k} sort`;
  algorithmSelect?.append(option);
});

// @ts-ignore
algorithmSelect.addEventListener("change", (e) => {
  sortingAlgo = algorithms.get(algorithmSelect.value)!;
});

let data = randomArray(100, 0, 100);
let opsCount = 0;

canvas.drawData(data);
updateStats();

async function updateCanvas() {
  for (const state of drawQueue) {
    console.debug("drawing");
    canvas.drawData(state);
    opsCount++;
    updateStats();
    await pause(DELAY);
  }
  console.log("done");
  canvas.drawData(data);
}

function updateStats() {
  const sizeSpan = document.querySelector("#size")!;
  const opsSpan = document.querySelector("#ops")!;

  sizeSpan.textContent = String(data.length);
  opsSpan.textContent = String(opsCount);
}

let sorting = false;

sortButton?.addEventListener("click", (_) => {
  if (sorting) {
    return;
  }

  sortingAlgo.addEventListener("sort", (e) => {
    const event = (e as SortEvent).detail as number[];
    drawQueue.append(event);
  });

  sorting = true;
  const sortedData = sortingAlgo.sort(data);
  console.log(sortedData);
  updateCanvas().then(() => {
    sorting = false;
  });
});

// @ts-ignore
resetButton.addEventListener("click", (e) => {
  opsCount = 0;
  updateStats();
  data = randomArray(100, 0, 100);
  canvas.drawData(data);
});
