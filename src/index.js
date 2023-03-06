console.log("Webpack is working!");

import MovingObject from "./moving_object";
window.MovingObject = MovingObject;

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");