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
            this.asteroids.push(new Asteroid({pos:randPos, game:this}))
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

    wrap(pos) {
        // let newX = pos[0] % Game.DIM_X;
        // if (newX < 0) newX = Game.DIM_X;
        // if (newX < 0) newX = newY;
        // let newY = pos[1] % Game.DIM_Y;
        // if (newY < 0) newY= Game.DIM_Y;
        // if (newY < 0) newY = -newY;

        let newX = pos[0];
        if (newX <= 0) {
            newX = Game.DIM_X;
        } else if (newX >= Game.DIM_X) {
            newX = 0;
        }

        let newY = pos[1];
        if (newY <= 0) {
            newY = Game.DIM_Y;
        } else if (newY >= Game.DIM_Y) {
            newY = 0;
        }


        return [newX, newY];
    }
}

export default Game; 