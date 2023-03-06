import Asteroid from "./asteroid";

class Game {
    static DIM_X = 500;
    static DIM_Y = 500;
    static NUM_ASTEROIDS = 10;

    constructor(){
        this.asteroids = []; 
        this.addAsteroids(); 

    }

    addAsteroids(){
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++){
            let randPos = this.randomPosition();
            this.asteroids.push(new Asteroid({pos:randPos}))
        }
    }

    randomPosition() {
        const x = Math.floor(Math.random() * 501)
        const y = Math.floor(Math.random() * 501)
        return [x, y]; 
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y); 
        this.asteroids.forEach((rock) => rock.draw(ctx))
    }

    moveObject() {
        this.asteroids.forEach((rock) => rock.move())
    }
}

export default Game; 