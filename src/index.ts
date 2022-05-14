import './index.css'

import { pause, randomArray } from './utils.js'
import { Canvas } from './classes/Canvas.js'
import { SortEvent } from './classes/SortEvent.js'
import { DrawQueue } from './classes/DrawQueue'
import { BubbleSort } from './sort/BubbleSort.js'
import { InsertionSort } from './sort/InsertionSort'

const canvasElem = document.querySelector('#canvas') as HTMLCanvasElement
const sortButton = document.querySelector('#sort-button')

const canvas = new Canvas(canvasElem)
const sortingAlgo = new InsertionSort()
const drawQueue = new DrawQueue()
const DELAY = 10

const data = randomArray(100, 0, 100)
let opsCount = 0

canvas.drawData(data)
updateStats()

async function updateCanvas() {
  for (const state of drawQueue) {
    console.debug('drawing')
    canvas.drawData(state)
    opsCount++
    updateStats()
    await pause(DELAY)
  }
  console.log('done')
  canvas.drawData(data)
}

function updateStats() {
  const sizeSpan = document.querySelector('#size')!
  const opsSpan = document.querySelector('#ops')!

  sizeSpan.textContent = String(data.length)
  opsSpan.textContent = String(opsCount)
}

sortButton?.addEventListener('click', (_) => {
  sortingAlgo.addEventListener('sort', (e) => {
    const event = (e as SortEvent).detail as number[]
    drawQueue.append(event)
  })

  const sortedData = sortingAlgo.sort(data)
  console.log(sortedData)
  updateCanvas()
})
