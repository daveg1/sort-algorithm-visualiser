import { randomArray } from './utils.js'
import { Canvas } from './canvas.js'
import { BubbleSort } from './sort/BubbleSort.js'
import { SortEvent } from './sort/SortEvent.js'

const canvasElem = document.querySelector('#canvas') as HTMLCanvasElement
const sortButton = document.querySelector('#sort-button')

const canvas = new Canvas(canvasElem)
const bubbleSort = new BubbleSort()
const updateQueue: number[][] = []

const data = randomArray(100, 0, 100)
canvas.drawData(data)

function updateCanvas() {
  requestAnimationFrame(updateCanvas)

  if (updateQueue.length <= 0) {
    return
  }

  console.debug('hello')
  canvas.drawData(updateQueue.shift() as number[])
}

sortButton?.addEventListener('click', (_) => {
  bubbleSort.addEventListener('sort', (e) => {
    const event = (e as SortEvent).detail as number[]

    updateQueue.push(event)
  })

  bubbleSort.sort(data)
  updateCanvas()
})
