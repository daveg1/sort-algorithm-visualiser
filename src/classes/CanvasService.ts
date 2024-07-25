import { pause } from "../utils/pause";
import { DrawQueue } from "./DrawQueue";
import { State } from "./State";

/**
 * Service class to handle rendering of the canvas
 */
export class CanvasService {
  static #canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
  static #ctx = this.#canvas.getContext("2d")!;
  static #drawQueue = new DrawQueue();
  static #RENDER_DELAY = 10;

  /**
   * Clears the screen before each render
   */
  static clear() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  /**
   * Accepts an array of data points and renders them as bars on the canvas
   * @param data
   */
  static drawData(data: number[]) {
    this.clear();
    this.#ctx.fillStyle = window.getComputedStyle(this.#canvas).color ?? "red"; // TODO: colour the "moving" value as red

    const w = this.#canvas.width / data.length;
    let x = 0;

    for (const value of data) {
      const h = this.#canvas.height * (value / 100);
      const y = this.#canvas.height - h;
      this.#ctx.fillRect(x, y, w, h);
      x += w;
    }
  }

  /**
   * what does this do?
   */
  static async updateCanvas() {
    for (const state of this.#drawQueue) {
      console.debug("drawing");
      this.drawData(state);
      State.incrementOpsCount();
      State.renderStats();
      await pause(this.#RENDER_DELAY);
    }
    console.log("done");
    this.drawData(State.data);
  }

  static appendToDrawQueue(array: number[]) {
    this.#drawQueue.append(array);
  }
}
