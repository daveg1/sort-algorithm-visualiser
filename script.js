import { randomArray } from "./js/utils.js";
import { Canvas } from "./js/canvas.js";
import { BubbleSort } from "./js/sort/BubbleSort.js";

const canvasElem = document.querySelector("#canvas");
const sortButton = document.querySelector("#sort-button");

const canvas = new Canvas(canvasElem);
const bubbleSort = new BubbleSort();
const updateQueue = [];

window.addEventListener("resize", canvas.updateDimensions.bind(canvas));

const data = randomArray(100, 0, 100);
canvas.updateDimensions();
canvas.drawData(data);

function updateCanvas() {
  requestAnimationFrame(updateCanvas);

  if (!updateQueue.length) {
    return;
  }

  console.debug("hello");
  canvas.drawData(updateQueue.shift());
}

sortButton.addEventListener("click", (e) => {
  bubbleSort.addEventListener("sort", (e) => {
    updateQueue.push(e.detail);
  });

  bubbleSort.sort(data);
  updateCanvas();
});
