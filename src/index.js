console.log("Webpack is working!");

import Asteroid from "./asteroid";
import MovingObject from "./moving_object";
import Game from "./game";
window.Game = Game; 
window.Asteroid = Asteroid;
window.MovingObject = MovingObject;

// document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
// })