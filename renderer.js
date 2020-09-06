var prevTime = performance.now();
class Renderer {


  constructor(args) {
    this.terminal = args.terminal
    this.rows = args.rows;
    this.colCount = args.colCount



    this.entities = []
    this.lines = []
    this.entities = [];


    this.singleClearedLine= " ".repeat(this.colCount);

    for(let i=0;i<this.rows;i++){//initialize the text that will be displayed

        this.lines[i] = this.singleClearedLine
      }


  }


  draw(){//display the changed lines in the terminal
    let newText = ""
    for(let i=0;i<this.lines.length;i++){
    newText += this.lines[i] + "\n"


    }
    this.terminal.innerText = newText;
    }
    clearScreen(){



    }
    drawEntities(){//updates the lines without drawing
      for(let i=0;i<lineCount;i++){//clear the screen
        this.lines[i] = this.singleClearedLine
      }

      for(let i=0;i<this.entities.length;i++){//all entities
        for(let j = 0; j<this.entities[i].sprite.length;j++){ //rows
          for(let k=0;k<this.entities[i].sprite[j].length;k++){//cols
            if(this.entities[i].sprite[j].charAt(k) !=" " &&this.entities[i].sprite[j].charAt(k) !="  "){
              if(j+this.entities[i].y>=0&&j+this.entities[i].y<this.rows &&k+this.entities[i].x>=0&&k+this.entities[i].x<=this.colCount){
                this.lines[j+this.entities[i].y]= setCharAt(this.lines[j+this.entities[i].y],k+this.entities[i].x,this.entities[i].sprite[j].charAt(k))
              }
            }


          }
        }
      }
    }

    updateEntities(){
        for(let i=0;i<this.entities.length;i++){//all entities
          this.entities[i].update();
        }
    }

    removeDeadEntities(){
      for(let i=this.entities.length-1;i>=0;i--){
        if(this.entities[i].dead){
          this.entities.splice(i, 1);
      }
      }



    }

    addEntity(entity){
      this.entities.push(entity)
    }

    clearAllEntities(){

      this.entities = [];


    }
    setColCount(colCount){
      this.colCount = colCount;
      this.singleClearedLine= " ".repeat(this.colCount);
    }



    static update(renderer){
      renderer.removeDeadEntities();
      renderer.updateEntities();
      renderer.drawEntities()
      renderer.draw();
      console.log(1/(performance.now()-prevTime)*1000);
      prevTime = performance.now();
      setTimeout(Renderer.update,33,renderer)
    }


}
