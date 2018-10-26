const board = document.querySelector('#board');
const startBtn = document.querySelector('#start');
const hitBox = document.querySelector('hitBox');

let pos = 0;
let score = 0;
let i = 0;

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
  for(let i = 0; i < 12; i += 1){
    grid = document.createElement('div');
    grid.className = 'Btn[i] hitBox';
    board.appendChild(grid);
  }
  renderNote();
}

//Render Note function
function renderNote(){
  let counter = 0;
  let id = setInterval(notes, 20);
  function notes(){
    let noteClass = document.querySelectorAll('.note');
    let note0 = document.querySelector('#note0') // noteClass= divs with class of .note
    console.log(counter, 'this is');
    if(counter === 0){randomNote()}
    let noteId = document.querySelector('#note0'); //noteId = first note
    pos += 10;
    noteClass.forEach(e => { e.style.top = pos + 'px'; });
    counter++;
    if(counter === 1000){
      clearInterval(id);
    }
    else{
      //Game Controls
      document.querySelector('body').addEventListener('keydown', (e) => {
        const keyCode = e.keyCode;
        switch(keyCode){
          case 81: //Q
            console.log('Q');
            if(pos >= 600 && pos <= 650){
              pos = 0;
              score += 100;
              randomNote();
              console.log(noteClass, "whattup")
              noteClassremove(); //need to give individual Id's to all divs
              clearInterval(id);
              console.log('you did it!');
            }
            else{

            }
            break;
          case 87: //W
            console.log('W');
            if(pos >= 600 && pos <= 650){
              pos = 0;
              score += 100;
              randomNote();
              console.log(noteClass, "whattup")
              noteClass.remove(); //need to give individual Id's to all divs
              // clearInterval(id);
              console.log('you did it!');
              }
            break;
          case 69: //E
            console.log('E');
            if(pos >= 600 && pos <= 650){
              pos = 0;
              score += 100;
              randomNote();
              console.log(noteClass, "whattup")
              noteClass.remove(); //need to give individual Id's to all divs
              // clearInterval(id);
              console.log('you did it!');
            }
            break;
          case 82: //R
            console.log('R');
            if(pos >= 600 && pos <= 650){
              pos = 0;
              score += 100;
              randomNote();
              console.log(noteClass, "whattup")
              noteClass.remove(); //need to give individual Id's to all divs
              // clearInterval(id);
              console.log('you did it!');
            }
            break;
          case 84: //T
            console.log('T');
            if(pos >= 600 && pos <= 650){
              pos = 0;
              score += 100;
              randomNote();
              console.log(noteClass, "whattup")
              noteClass.remove(); //need to give individual Id's to all divs
              // clearInterval(id);
              console.log('you did it!');
            }
            break;
          case 89: //Y
            console.log('Y');
            if(pos >= 600 && pos <= 650 && note.className === 'orangeNote'){
              pos = 0;
              score += 100;
              randomNote();
              console.log(noteClass, "whattup")
              noteClass.remove(); //need to give individual Id's to all divs
              // clearInterval(id);
              console.log('you did it!');
            }
            break;
        }
      });
    }
  }
  // return score;
}

function randomNote(){ //NoteProduction
  // for(let i = 0; i < 6; i +=1){
    let note = document.createElement('div'); //note div is created
    note.id = `note${i}`; // note is given an id of "note[i]"
    whichColumn(note); // run whichColumn function
    // console.log('this is note.dataset.delay', note.dataset.delay)
    board.appendChild(note); // the note is appended to the board
    // setTimeout((function goes here), note.dataset.delay)
  // }
}

function whichColumn(note){
  note.style.left = (Math.floor(Math.random()*6)) * 60 + 'px'; //note[i] is given a style of left with it's value randomy generated
  switch(note.style.left){
    case '0px':
    note.className = 'note greenNote'
    break;
    case '60px':
    note.className = 'note redNote'
    break;
    case '120px':
    note.className = 'note blueNote'
    break;
    case '180px':
    note.className = 'note yellowNote'
    break;
    case '240px':
    note.className = 'note purpleNote'
    break;
    case '300px':
    note.className = 'note orangeNote'
    break;
  }
}

function dropNote(){
  currentPos = pos

}

start();
