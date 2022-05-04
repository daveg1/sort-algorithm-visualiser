import { randomArray, formatValue } from "./src/utils.js";
import { canvas, ctx, clear, updateDimensions } from "./src/canvas.js";
import { BubbleSort } from "./src/sort/bubble.js";

window.addEventListener("resize", updateDimensions);

updateDimensions();

function drawCanvas(data) {
  clear();
  ctx.fillStyle = "#f00";

  const w = innerWidth / data.length;
  let x = 0;

  for (const value of data) {
    const h = formatValue(value, canvas.height);
    const y = canvas.height - h;
    ctx.fillRect(x, y, w, h);
    x += w;
  }
}

const data = randomArray(100, 0, 100);
drawCanvas(data);

const sortButton = document.querySelector("#sort-button");

sortButton.addEventListener("click", (e) => {
  const bubbleSort = new BubbleSort();
  const updateQueue = [];

  bubbleSort.addEventListener("sort", (e) => {
    updateQueue.push(e.detail);
  });

  bubbleSort.sort(data);

  function updateCanvas() {
    requestAnimationFrame(updateCanvas);

    if (!updateQueue.length) {
      return;
    }

    console.log("hello");
    drawCanvas(updateQueue.shift());
  }

  updateCanvas();
});
