import Game from "./game";
class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
  }

  start() {
    setInterval(() => {
      this.game.moveObject();
      this.game.draw(this.ctx);
    }, 20)
  }
}

export default GameView;