import './index.css'

import { randomArray } from './utils.js'
import { Canvas } from './classes/Canvas.js'
import { BubbleSort } from './sort/BubbleSort.js'
import { SortEvent } from './classes/SortEvent.js'

const canvasElem = document.querySelector('#canvas') as HTMLCanvasElement
const sortButton = document.querySelector('#sort-button')

const canvas = new Canvas(canvasElem)
const bubbleSort = new BubbleSort()
const drawQueue: number[][] = []

const data = randomArray(100, 0, 100)
let opsCount = 0

canvas.drawData(data)
updateStats()

function updateCanvas() {
  requestAnimationFrame(updateCanvas)

  if (drawQueue.length <= 0) {
    return
  }

  console.debug('drawing')
  canvas.drawData(drawQueue.shift() as number[])

  opsCount++
  updateStats()
}

function updateStats() {
  const sizeSpan = document.querySelector('#size')!
  const opsSpan = document.querySelector('#ops')!

  sizeSpan.textContent = String(data.length)
  opsSpan.textContent = String(opsCount)
}

sortButton?.addEventListener('click', (_) => {
  bubbleSort.addEventListener('sort', (e) => {
    const event = (e as SortEvent).detail as number[]
    drawQueue.push(event)
  })

  bubbleSort.sort(data)
  updateCanvas()
})
