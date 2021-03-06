export default function sketch(p){

  let canvas ;
  let w = window.innerWidth;
  let h = window.innerHeight;
  let points = [];
  let multi = 0.005;

  p.setup=()=>{

    canvas = p.createCanvas(w, h);
    p.background(0);
    p.angleMode(p.DEGREES)
    p.noiseDetail(2)
    let density = 80;
    let space = w / density

    for (let i = 0; i < w; i += space) {
      for (let j = 0; j < h; j += space) {
        let temp = p.createVector(i + p.random(-10, 10), j + p.random(-10, 10));
        points.push(temp);
      }
    }

  }
  p.draw = () => {
    p.noStroke();

    for (let k = 0; k < points.length; k++) {
      let colors = [(154, 39, 90), (86, 238, 244), (29, 211, 176)]
      p.fill(colors[Math.floor(Math.random() * 3)]);
      let angle = p.map(p.noise(points[k].x * multi, points[k].y * multi), 0, 1, 0, 720);
      points[k].add(p.createVector(p.cos(angle), p.sin(angle), ))
      p.ellipse(points[k].x, points[k].y, 1);
    }
  }
}
