const body = document.querySelector('body');
const board = document.querySelector('#board');
const hitBox = document.querySelector('hitBox');
titleStartScore = body.querySelector('#titleStartScore');
const startBtn = titleStartScore.querySelector('#start')
const title = titleStartScore.querySelector('h1');

let rootNote = document.createElement('audio');
rootNote.src = "audio/A.wav"
let thirdNote = document.createElement('audio');
thirdNote.src = "audio/C.wav"
let fourthNote = document.createElement('audio');
fourthNote.src = "audio/D.wav"
let fifthNote = document.createElement('audio');
fifthNote.src = "audio/E.wav"
let sixthNote = document.createElement('audio');
sixthNote.src = "audio/G.wav"
let rootHigh = document.createElement('audio');
rootHigh.src = "audio/highA.wav"

let counter = 0;
let pos = 0;
let score = 0;
let i = 0;
let x = 0;
let noteCounter = 0;
let fails = 0;


function start() {
  startBtn.addEventListener('click', renderGrid);
}


function renderGrid() {
  startBtn.remove();
  title.style.animation = 'titleFlash 3s linear';
  let scoreBoard = document.createElement('div');
  scoreBoard.id = 'scoreBoard';
  titleStartScore.appendChild(scoreBoard);
  for (let i = 0; i < 66; i += 1) {
    grid = document.createElement('div');
    grid.className = 'grid';
    board.appendChild(grid);
  }
  for (let i = 0; i < 6; i += 1) {
    grid = document.createElement('div');
    grid.className = 'Btn[i] hitBox';
    board.appendChild(grid);
  }
  level1();
}



function level1() {
  let id = setInterval(notes, 60);
  scoreBoard.innerHTML = `Your score is ${score}`;
  function notes() {
    if(fails === 10){
      let loser = document.createElement('div');
      loser.id = 'loser';
      loser.innerHTML = 'Game Over, refresh the page!';
      board.appendChild(loser);
      clearInterval(id);
    }
    let noteClass = document.querySelectorAll('.note');
    setTimeout(randomNote, Math.random(Math.floor()*5000)+10000);
    noteClass.forEach(e => {
      let pos = parseInt(e.style.top) || 0;
      pos += 10
      if (e.style.top === '660px') {
        fails += 1;
        e.remove();
      } else {
        e.style.top = pos + 'px';
      }
    });
    counter++;
    if(counter === 130){
      backingTrack = document.createElement('audio');
      backingTrack.src = "audio/backingTrackInA.mp3"
      backingTrack.load();
      backingTrack.play();
    }
    if (counter === 1000) {
      clearInterval(id);
      let getReady = document.createElement('div');
      getReady.id = 'getReady';
      getReady.innerHTML = 'Get ready for level2!';
      body.appendChild(getReady);
      level2()
    } else if (true) {
      document.querySelector('body').addEventListener('keyup', (e) => {
        const keyCode = e.keyCode;
        switch (keyCode) {
          case 81:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('greenNote')) {
                rootNote.play();
                eachNote.remove();
                score += 100;
              }
            }
          });
          break;
          case 87:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('redNote')) {
                thirdNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 69:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('blueNote')) {
                fourthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 82:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('yellowNote')) {
                fifthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 84:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('purpleNote')) {
                sixthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 89:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('orangeNote')) {
                rootHigh.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
        }
      });
    }
  }
}

function level2() {
  let id = setInterval(notes, 60);
  function notes() {
    if(fails === 10){
      let loser = document.createElement('div');
      loser.id = 'loser';
      loser.innerHTML = 'Game Over, refresh the page!';
      board.appendChild(loser);
      clearInterval(id);
    }
    let noteClass = document.querySelectorAll('.note');
    setTimeout(randomNote, Math.random(Math.floor()*5000)+10000);
    noteClass.forEach(e => {
      let pos = parseInt(e.style.top) || 0;
      pos += 10
      if (e.style.top === '660px') {
        fails += 1;
        e.remove();
      } else {
        e.style.top = pos + 'px';
      }
    });
    counter++;
    if (counter === 2000) {
      clearInterval(id);
      let getReady = document.createElement('div');
      getReady.id = 'getReady';
      getReady.innerHTML = 'Get ready for level2!';
      body.appendChild(getReady);
      let scoreBoard = document.createElement('div');
      scoreBoard.id = 'scoreBoard';
      scoreBoard.innerHTML = `Your score is ${score}`;
      body.appendChild(scoreBoard);
      level3()
    } else if (true) {
      document.querySelector('body').addEventListener('keyup', (e) => {
        const keyCode = e.keyCode;
        switch (keyCode) {
          case 81:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('greenNote')) {
                rootNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 87:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('redNote')) {
                thirdNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 69:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('blueNote')) {
                fourthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 82: //R
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('yellowNote')) {
                fifthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 84:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('purpleNote')) {
                sixthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 89:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('orangeNote')) {
                rootHigh.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
        }
      });
    }
  }
}

function level3() {
  let id = setInterval(notes, 30);

  function notes() {
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
        fails += 1;
        e.remove();
      } else {
        e.style.top = pos + 'px';
      }
    });
    counter++;
    if (counter === 3000) {
      clearInterval(id);
      getReady = document.createElement('div');
      getReady.id = 'getReady';
      getReady.innerHTML = 'Hey, you won!';
      body.appendChild(getReady);
      scoreBoard = document.createElement('div');
      scoreBoard.id = 'scoreBoard';
      scoreBoard.innerHTML = `Your score is ${score}`;
      body.appendChild(scoreBoard);
    } else if (true) {
      document.querySelector('body').addEventListener('keyup', (e) => {
        const keyCode = e.keyCode;
        switch (keyCode) {
          case 81:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('greenNote')) {
                rootNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 87:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('redNote')) {
                thirdNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 69:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('blueNote')) {
                fourthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 82:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('yellowNote')) {
                fifthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 84:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('purpleNote')) {
                sixthNote.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
          case 89:
          noteClass.forEach(eachNote => {
            if (eachNote.style.top >= '600px' && eachNote.style.top <= '665px') {
              if (eachNote.classList.contains('orangeNote')) {
                rootHigh.play();
                score += 100;
                eachNote.remove();
              }
            }
          });
          break;
        }
      });
    }
  }
}

function randomNote() {

  if(noteCounter === 7){
    let note = document.createElement('div');
    whichColumn(note);
    board.appendChild(note);
    noteCounter = 0;
  }
  else{
    noteCounter += 1;
  }
}

function whichColumn(note) {
  // note.style.left = "0px"
  note.style.left = (Math.floor(Math.random() * 6)) * 60 + 'px';
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
