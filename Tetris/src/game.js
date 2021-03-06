export default class Game {          
    score = 0;
    lines = 0;
    level = 0;
    playfield = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];  

    activePiece = {
        x: 0,
        y: 0,
        blocks: [
            [0,1,0],
            [1,1,1],
            [0,0,0]
        ]
    };

    movePieceLeft() {
        this.activePiece.x -= 1;

        if (this.hasCollision()){        //check if we are out of field, and if its  so? than return figure on place before 
            this.activePiece.x += 1;
        }
    }

    movePieceRight() {
        this.activePiece.x += 1;

        if (this.hasCollision()){        //check if we are out of field, and if its  so? than return figure on place before 
            this.activePiece.x -= 1;
        }
    }

    movePieceDown() {
        this.activePiece.y += 1;

        if (this.hasCollision()){        //check if we are out of field, and if its  so? than return figure on place before 
            this.activePiece.y -= 1;

            this.lockPiece();
        }
    }

    //check if tetromino isn't out of field
    hasCollision(){
        const {y: pieceY, x: pieceX, blocks} = this.activePiece;                                            

        for (let y = 0; y < blocks.length; y++){                                                            
            for (let x = 0; x < blocks[y].length; x++) {     
                if(
                    blocks[y][x] &&
                    ((this.playfield[pieceY + y] === undefined || this.playfield[pieceY + y][pieceX + x] === undefined) ||
                    this.playfield[pieceY + y][pieceX + x])
                ) {
                    return true;
                }                                                                                                                                 
            }
        }

        return false;
    }

    //додаємо метод, який дозволяє перенести значення з масиву активної фігури(activePice) в ігрове поле
    lockPiece() {
        const {y: pieceY, x: pieceX, blocks} = this.activePiece;                                            //деструктуризація

        for (let y = 0; y < blocks.length; y++){                                                            //зовнішній цикл перебирає ряди activePiece.blocks
            for (let x = 0; x < blocks[y].length; x++) {                                                    //внутрішній перебирає елементи кожного ряду
                if (blocks[y][x]) {
                     this.playfield[pieceY + y][pieceX + x] = blocks[y][x];                                      //копіюєм знчення з масива blocks в  playfield
                }
            }
        }
    }
}


