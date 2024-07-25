import "./index.css";
import { CanvasService } from "./classes/CanvasService";
import { SortEvent } from "./classes/SortEvent";
import { State } from "./classes/State";

const resetButton = document.querySelector(
  "#reset-button",
) as HTMLButtonElement;
const sortButton = document.querySelector("#sort-button") as HTMLButtonElement;

CanvasService.drawData(State.data);
State.renderStats();

sortButton?.addEventListener("click", () => {
  if (State.isSorting) {
    return;
  }

  State.currentAlgo.addEventListener("sort", (e) => {
    const sortState = (e as SortEvent).detail;
    CanvasService.appendToDrawQueue(sortState);
  });

  State.isSorting = true;
  const sortedData = State.currentAlgo.sort(State.data);
  console.log(sortedData);
  CanvasService.updateCanvas().then(() => {
    State.isSorting = false;
  });
});

resetButton.addEventListener("click", (_) => {
  State.resetStats();
  CanvasService.drawData(State.data);
});
