import { generateData } from "../utils/generate-data";

export class State {
  static #opsCount = 0;
  static #data: number[] = generateData(100, 0, 100);

  static get data() {
    return this.#data;
  }

  static get opsCount() {
    return this.#opsCount;
  }

  static incrementOpsCount() {
    return this.#opsCount++;
  }

  static regenerateData() {
    this.#data = generateData(100, 0, 100);
  }

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
