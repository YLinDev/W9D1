class MovingObject {
  constructor(arg) {
    console.log(arg);
    this.pos = arg["pos"];
    this.vel = arg["vel"];
    this.radius = arg["radius"];
    this.color = arg["color"];
    this.game = arg["game"];
  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.beginPath();

    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    // ctx.stroke();
    // ctx.fill()

    const image = document.getElementById("src")
    ctx.drawImage(image, this.pos[0], this.pos[1], 50, 50)
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  }
}

export default MovingObject;