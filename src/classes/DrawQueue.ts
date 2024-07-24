interface IterableItem {
  value: number[];
  done: boolean;
}

export class DrawQueue {
  constructor(private queue: number[][] = []) {}

  [Symbol.iterator]() {
    return this;
  }

  next(): IterableItem {
    const value = this.queue.shift()!;
    const done = !this.queue.length;

    return { value, done };
  }

  append(item: number[]): void {
    this.queue.push(item);
  }
}
