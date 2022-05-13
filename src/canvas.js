import { formatValue } from './utils'

export class Canvas {
  #canvas
  #ctx

  constructor(canvas) {
    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Not a canvas element')
    }

    this.#canvas = canvas
    this.#ctx = canvas.getContext('2d')
  }

  clear() {
    this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height)
  }

  updateDimensions(width, height) {
    this.#canvas.width = width
    this.#canvas.height = height
  }

  drawData(data) {
    this.clear()
    this.#ctx.fillStyle = '#f00'

    const w = innerWidth / data.length
    let x = 0

    for (const value of data) {
      const h = formatValue(value, this.#canvas.height)
      const y = this.#canvas.height - h
      this.#ctx.fillRect(x, y, w, h)
      x += w
    }
  }
}
