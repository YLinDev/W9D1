class MovingObject {
  constructor(arg) {
    console.log(arg);
    this.pos = arg["pos"];
    this.vel = arg["vel"];
    this.radius = arg["radius"];
    this.color = arg["color"];
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.stroke();
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}

export default MovingObject;