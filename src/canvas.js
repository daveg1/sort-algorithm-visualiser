export const canvas = document.querySelector("#canvas");
export const ctx = canvas.getContext("2d");

export function updateDimensions() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

export function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

class Canvas {
  constructor(canvasElem) {}
}
