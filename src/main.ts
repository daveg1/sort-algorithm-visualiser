import { randomArray } from './utils.js'
import { Canvas } from './canvas.js'
import { BubbleSort } from './sort/BubbleSort.js'

const canvasElem = document.querySelector('#canvas') as HTMLCanvasElement
const sortButton = document.querySelector('#sort-button')

const canvas = new Canvas(canvasElem)
const bubbleSort = new BubbleSort()
const updateQueue: any[] = []

const data = randomArray(100, 0, 100)
canvas.updateDimensions(750, 500)
canvas.drawData(data)

function updateCanvas() {
  requestAnimationFrame(updateCanvas)

  if (!updateQueue.length) {
    return
  }

  console.debug('hello')
  canvas.drawData(updateQueue.shift())
}

sortButton?.addEventListener('click', (_) => {
  bubbleSort.addEventListener('sort', (e) => {
    updateQueue.push((e as CustomEvent).detail as number[])
  })

  bubbleSort.sort(data)
  updateCanvas()
})
