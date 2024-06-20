import { Gradient } from "./Gradient.js";

var gradient;

export function initCanvas(canvasId) {
  gradient = new Gradient();
  gradient.initGradient(canvasId);
}