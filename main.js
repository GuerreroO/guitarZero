const board = document.querySelector('#board');
const startBtn = document.querySelector('#start');
const hitBox = document.querySelector('hitBox');
let pos = 0;
let score = 0;
//Start game function
function start(){
  startBtn.addEventListener('click', renderGrid);
}

//Render Grid Function
function renderGrid(){
  for(let i = 0; i < 72; i+=1){
    grid = document.createElement('div');
    grid.className = 'grid';
    // grid.dataset.index = i;
    board.appendChild(grid);
  }
  for(let i = 0; i < 6; i += 1){
    grid = document.createElement('div');
    grid.className = 'Btn[i] hitBox';
    board.appendChild(grid);
  }
  renderNote();
}

//Render Note function
function renderNote(){
  note = document.createElement('div');
  note.className = "note";
  board.appendChild(note);
  let id = setInterval(notes, 100);
  setInterval(notes, 100);
  function notes(){
    if(pos === 650){
      clearInterval(id);
    }
    else{
      //Game Controls
      document.querySelector('body').addEventListener('keydown', (e) => {
        const keyCode = e.keyCode;
        switch(keyCode){
          case 81: //Q
            console.log('Q');
            if(pos >= 400 && pos <= 500){
              currentPos = pos;
              score += 100;
              note.remove();
              console.log('you did it!');
            }
            else{

            }
            break;
          case 87: //W
            console.log('W');
            break;
          case 69: //E
            console.log('E');
            break;
          case 82: //R
            console.log('R');
            break;
          case 84: //T
            console.log('T');
            break;
          case 89: //Y
            console.log('Y');
            break;
        }
      });
      console.log(pos);
      pos += 10;
      note.style.top = pos + 'px';
    }
  }
  return score;
}








start();
