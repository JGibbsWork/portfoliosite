export default function sketch(p){
  let t;
  let canvas ;
  let w = window.innerWidth;
  let h = window.innerHeight;
  let x ; let y ; let d ;
  p.setup=()=>{

    canvas =p.createCanvas(w, h, p.WEBGL);
    canvas.style('display','block');
    p.angleMode(p.DEGREES);

    t=0;

    const x_center = (p.windowWidth - w) / 2;
    const y_center = (p.windowHeight - h) / 2;
    canvas.position(x_center, y_center);

  }
  p.draw = () => {
    p.background(0);

    p.rotateX(60)

    p.noFill()
    p.stroke(255)


    for (let i = 0; i < 10; i++) {
      p.beginShape()
      for (let j = 0; j < 360; j++) {
        let rad = i * 8;
        let xax = rad * p.cos(j);
        let yax = rad * p.sin(j);
        let zax = p.sin(p.frameCount) * 500;

        p.vertex(xax, yax, zax)
      }
      p.endShape(p.CLOSE)
    }


  }
}


/*
p.stroke('red')
p.strokeWeight(3)
p.line(0, 0, w, h);
p.line(0, h, w, 0);

*/