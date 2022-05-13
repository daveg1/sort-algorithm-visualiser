export class DrawQueue {
  constructor(private queue: number[][] = []) {}

  get length(): number {
    return this.queue.length
  }

  next(): number[] {
    return this.queue.shift()!
  }

  append(item: number[]): void {
    this.queue.push(item)
  }
}
