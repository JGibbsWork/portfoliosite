// Color palette - grayscale values for subtle effect
const COLORS = [90, 244, 176];

const NOISE_MULTIPLIER = 0.005;
const GRID_DENSITY = 50;

export default function sketch(p){
  let canvas;
  let w = window.innerWidth;
  let h = window.innerHeight;
  let points = [];

  p.setup = () => {
    canvas = p.createCanvas(w, h);
    p.background(0);
    p.angleMode(p.DEGREES);
    p.noiseDetail(2);
    const space = w / GRID_DENSITY;

    for (let i = 0; i < w; i += space) {
      for (let j = 0; j < h; j += space) {
        const temp = p.createVector(i + p.random(-10, 10), j + p.random(-10, 10));
        points.push(temp);
      }
    }
  };

  p.draw = () => {
    p.noStroke();

    for (let k = 0; k < points.length; k++) {
      p.fill(COLORS[Math.floor(Math.random() * COLORS.length)]);
      const angle = p.map(p.noise(points[k].x * NOISE_MULTIPLIER, points[k].y * NOISE_MULTIPLIER), 0, 1, 0, 720);
      points[k].add(p.createVector(p.cos(angle), p.sin(angle)));
      p.ellipse(points[k].x, points[k].y, 1);
    }
  };

  p.windowResized = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    p.resizeCanvas(w, h);
  };
}
