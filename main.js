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
  for(let i = 0; i < 6; i += 1){
    grid = document.createElement('div');
    grid.className = 'Btn[i] hitBox';
    board.appendChild(grid);
  }
  renderNote();
}

//Render Note function
function renderNote(){
  let id = setInterval(notes, 100);
  // return score;
}

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
            noteId.remove();
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

    //Note production
    console.log(pos);
    setTimeout(randomNote(), 1000);
    let noteClass = document.querySelectorAll('.note'); // noteClass= divs with class of .note
    let noteId = document.querySelector('#note0'); //noteId = first note0
    randomNote(); // runs function random note
    pos += 10;
    noteClass.forEach(note => note.style.top = pos + 'px');
  }
}

function randomNote(){ //NoteProduction
  for(let i = 0; i < 6; i +=1){
    note = document.createElement('div'); //note div is created
    whichColumn(note); // run whichColumn function
    note.dataset.delay = Math.floor(Math.random()*6) * 1000; // adds data-delay attribute with a value between 1000-10000
    console.log('this is note.dataset.delay', note.dataset.delay)
    board.appendChild(note); // the note is appended to the board
    // setTimeout((function goes here), note.dataset.delay)
  }
}

//I need a function that will send random divs out at random moments
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

// function dropNote

start();
