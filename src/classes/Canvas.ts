import { formatValue } from '../utils'

export class Canvas {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.canvas.width = 750
    this.canvas.height = 500
    this.ctx = canvas.getContext('2d')!
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawData(data: number[]) {
    this.clear()
    this.ctx.fillStyle = window.getComputedStyle(this.canvas).color ?? 'red'

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
