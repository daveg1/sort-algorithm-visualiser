import { formatValue } from './utils'

export class Canvas {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D | null

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
  }

  clear() {
    this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  updateDimensions(width: number, height: number) {
    this.canvas.width = width
    this.canvas.height = height
  }

  drawData(data: number[]) {
    if (!this.ctx) {
      return
    }

    this.clear()
    this.ctx.fillStyle = '#f00'

    const w = this.canvas.width / data.length
    let x = 0

    for (const value of data) {
      const h = formatValue(value, this.canvas.height)
      const y = this.canvas.height - h
      this.ctx.fillRect(x, y, w, h)
      x += w
    }
  }
}
