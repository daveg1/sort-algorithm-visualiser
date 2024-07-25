import { algoMap, AlgoNames } from "../algorithms";
import { generateData } from "../utils/generate-data";

export class State {
  static #data: number[] = generateData(100, 0, 100);
  static #opsCount = 0;
  static #isSorting = false;
  static #currentAlgo = algoMap.get("insertion")!;

  // Data

  static get data() {
    return this.#data;
  }

  static regenerateData() {
    this.#data = generateData(100, 0, 100);
  }

  // Ops

  static get opsCount() {
    return this.#opsCount;
  }

  static incrementOpsCount() {
    return this.#opsCount++;
  }

  // Sorting state

  static get isSorting() {
    return this.#isSorting;
  }

  static set isSorting(value: boolean) {
    this.#isSorting = value;
  }

  // Algos

  static get currentAlgo() {
    return this.#currentAlgo;
  }

  static setAlgo(value: AlgoNames) {
    this.#currentAlgo = algoMap.get(value)!;
  }

  // Stats

  static renderStats() {
    const sizeSpan = document.querySelector("#size") as HTMLElement;
    const opsSpan = document.querySelector("#ops")! as HTMLElement;

    sizeSpan.textContent = `${State.data.length}`;
    opsSpan.textContent = `${State.opsCount}`;
  }

  static resetStats() {
    this.#opsCount = 0;
    this.#data = generateData(100, 0, 100);
    this.renderStats();
  }
}
