console.log("Webpack is working!");

import Asteroid from "./asteroid";
import MovingObject from "./moving_object";
import Game from "./game";
import GameView from "./game_view";
window.Game = Game; 
window.Asteroid = Asteroid;
window.MovingObject = MovingObject;
window.GameView = GameView;

window.canvas = document.getElementById("game-canvas");
window.ctx = canvas.getContext("2d");