const body = document.querySelector('body');
const board = document.querySelector('#board');
const startBtn = document.querySelector('#start');
const hitBox = document.querySelector('hitBox');
let counter = 0;
let pos = 0;
let score = 0;
let i = 0;
let x = 0;
let noteCounter = 0;
let fails = 0;

//Start game function
function start() {
  startBtn.addEventListener('click', renderGrid);
  console.log('score is', score);
}

//Render Grid Function
function renderGrid() {
  for (let i = 0; i < 66; i += 1) {
    grid = document.createElement('div');
    grid.className = 'grid';
    // grid.dataset.index = i;
    board.appendChild(grid);
  }
  for (let i = 0; i < 6; i += 1) {
    grid = document.createElement('div');
    grid.className = 'Btn[i] hitBox';
    board.appendChild(grid);
  }
  scoreBoard = document.createElement('div');
  scoreBoard.id = 'scoreBoard';
  scoreBoard.innerHTML = score;
  body.appendChild(scoreBoard);
  renderNote();
}


//Render Note function
function renderNote() {

  let id = setInterval(notes, 50);

  function notes() {
    console.log('this is failure', fails);
    if(fails === 10){
      loser = document.createElement('div');
      loser.id = 'loser';
      loser.innerHTML = 'Game Over, refresh the page!'
      board.appendChild(loser);
      clearInterval(id);
    }
    let noteClass = document.querySelectorAll('.note');
    let note0 = document.querySelector('#note0'); // noteClass= divs with class of .note
    setTimeout(randomNote, Math.random(Math.floor()*5000)+10000);
    let noteId = document.querySelector('#note0'); //noteId = first note
    noteClass.forEach(e => {
      let pos = parseInt(e.style.top) || 0;
      pos += 10
      if (e.style.top === '660px') {
        console.log('hello');
        fails += 1;
        e.remove();
      } else {
        e.style.top = pos + 'px';
      }
    });
    counter++;
    if (counter === 250) {
      clearInterval(id);
    } else if (true) {
      //Game Controls
      document.querySelector('body').addEventListener('keyup', (e) => {
        console.log(e.keyCode)
        const keyCode = e.keyCode;
        switch (keyCode) {
          case 81: //Q
          console.log('Q');
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '650px') {
              if (eachNote.classList.contains('greenNote')) {
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 87: //W
          console.log('W');
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '650px') {
              if (eachNote.classList.contains('redNote')) {
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 69: //E
          console.log('E');
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '650px') {
              if (eachNote.classList.contains('blueNote')) {
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 82: //R
          console.log('R');
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '650px') {
              if (eachNote.classList.contains('yellowNote')) {
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 84: //T
          console.log('T');
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '650px') {
              if (eachNote.classList.contains('purpleNote')) {
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 89: //Y
          console.log('Y');
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '650px') {
              if (eachNote.classList.contains('orangeNote')) {
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
        }
      });
    }
    return score;
  }
}


function randomNote() { //NoteProduction
  if(noteCounter === 10){
    let note = document.createElement('div'); //note div is created
    note.id = `note${i}`; // note is given an id of "note[i]"
    whichColumn(note); // run whichColumn function
    board.appendChild(note); // the note is appended to the board
    noteCounter = 0;
  }
  else{
    console.log(noteCounter);
    noteCounter += 1;
  }
}

function whichColumn(note) {
  note.style.left = "0px"
  // note.style.left = (Math.floor(Math.random() * 6)) * 60 + 'px'; //note[i] is given a style of left with it's value randomy generated
  switch (note.style.left) {
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


start();
