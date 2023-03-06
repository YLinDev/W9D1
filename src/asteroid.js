import MovingObject from "./moving_object";
import { randomVec } from "./utils.js";

class Asteroid extends MovingObject {
    static RADIUS = 25; 
    static COLOR = "#9d00ff";
    constructor(arg){
        const obj = {
            pos : arg["pos"], 
            color : Asteroid.COLOR,
            radius : Asteroid.RADIUS, 
            vel : randomVec(10)
        }
        super(obj);
    }
}

export default Asteroid; 