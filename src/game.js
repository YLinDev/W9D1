import Asteroid from "./asteroid";

class Game {
    static DIM_X
    static DIM_Y
    static NUM_ASTEROIDS

    constructor(){
        this.asteroids = []; 
        this.addAsteroids(); 

    }

    addAsteroids(){
        for (let i = 0; i < 10; i++){
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
        ctx.clearRect(0, 0, 500, 500); 
        this.asteroids.forEach((rock) => rock.draw(ctx))
    }

    moveObject() {
        this.asteroids.forEach((rock) => rock.move())
    }
}

export default Game; 