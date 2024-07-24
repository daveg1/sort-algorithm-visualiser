import { pause } from "../utils/pause";
import { type DrawQueue } from "./DrawQueue";
import { State } from "./State";

/**
 * Service class to handle rendering of the canvas
 */
export class Canvas {
  #canvas: HTMLCanvasElement;
  #ctx: CanvasRenderingContext2D;
  #RENDER_DELAY = 10;

  constructor(canvas: HTMLCanvasElement) {
    this.#canvas = canvas;
    this.#ctx = canvas.getContext("2d")!;
  }

  /**
   * Clears the screen before each render
   */
  clear() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
  }

  /**
   * Accepts an array of data points and renders them as bars on the canvas
   * @param data
   */
  drawData(data: number[]) {
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

  async updateCanvas(drawQueue: DrawQueue) {
    for (const state of drawQueue) {
      console.debug("drawing");
      this.drawData(state);
      State.incrementOpsCount();
      State.renderStats();
      await pause(this.#RENDER_DELAY);
    }
    console.log("done");
    this.drawData(State.data);
  }
}
