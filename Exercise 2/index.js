class Cube {
    constructor(x) {

        this.x = x;

    }

    cubeArea () {
        return 6 * (this.x* this.x) ;
    }

    cubeParameters () {
        return 12 *this.x
    }    

}

const size = +prompt("Vnesi golemina na strana:")

const cube = new Cube(size);

console.log(cube.cubeArea());
console.log(cube.cubeParameters());