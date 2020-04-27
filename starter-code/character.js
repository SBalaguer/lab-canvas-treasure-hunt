class Character {
    constructor(){
        this.col = 0;
        this.row = 0;
    }

    moveUp(){
        if (this.row !==0){
            this.row--;
        }
    }

    moveRight(){
        if(this.col<10){
            this.col++;
        }
    }

    moveLeft(){
        if(this.col !==0){
            this.col--
        }
    }

    moveDown(){
        if(this.row<10){
            this.row++
        }
    }
}