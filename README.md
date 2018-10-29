# GuitarZero
Have you ever been listening to your favorite Rock song, played air-guitar, and said
to yourself "Damn, I wish could play that guitar solo!"? Have you ever started playing guitar
and quit after realizing the amount of effort it actually takes to play these tunes?
Well now with GuitarZero you can play some of your favorite tracks without the hassle
of actually learning the guitar, WOW!

Pick a song. Use your keyboard to hit the incoming notes on beat, get a high score, and feel like
a rockstar!



## MVP
1. The game starts a 13*6(6 columns, 13 rows) grid is generated. and a series of
   randomized notes began to fall on any of the 6 columns

3. each column has key associated to it, From left to right those keys are Q, W , E, R, T, Y

4. As the notes are falling down the column the player must press the columns associated
   key when the note reaches the very end of the grid(the 13 row).

5. As you correctly hit the key when the notes reach the bottom you get points.
   If the player fails the hit the note correctly he will not receive any points.

6. If the player fails to hit the notes 10 times in a row he will lose the game
   and must restart.

7. The game ends when all the notes have fallen and the song ends




## Post-MVP specs

1. There will be a start menu, and you may choose a song out of 3 to play.
   You must complete the song before it to unlock the next song.

2. when the game starts the grid will be generated and a series of predetermined,
   the song will play and notes will began to fall down the grid. These notes will will fall at the speed of the song that is currently playing.

3. There will be a range in which the player can successfully hit the notes.
   If they are slightly off will only receive half the amount of points then usual.

4. There are notes that have to be held, for a certain amount of time, in order
   to gain full points.

4. There is a score multiplier. If the player, perfectly hits three notes consecutively
   they will receive a multiplier, the player can have up to 5. For every multiplier,
   any points received will be multiplied by that amount. If the player fails to hit
   the notes perfectly their multiplier will be reset to 1.

5. There will be a menu at the end of the game, whether the player wins or loses, with options of
   picking a new song or trying again.

### Tech

 This game was built using basic HTML, CSS, and Javascript


## Problems

1. How to randomize which note appeared

2. how to increment each note's position value separately

3. How to randomize the time in which the notes appeared


## Solutions

1.  I used the function randomNote to run at a random setInterval every time this
    function ran it would created a 'note' element. Then it would run the whichColumn
    function that would assign a style.Left with a random value between 1 - 6 multiplied
    by 60 this allows notes to appear at random distances between that range, and thus
    falling in random columns. whichColumn also adds a specific class allowing any note
    within that column to be manipulated once it's style.top reaches a certain point.

```javascript
function randomNote() {

  if(noteCounter === 7){
    let note = document.createElement('div');
    whichColumn(note);
    board.appendChild(note);
    noteCounter = 0;
  }
  else{
    console.log(noteCounter);
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
```
2. being able to increment each notes style.top separately was crucial to the development
   of the game because it allows the notes to fall at different moments. This code
   snippet runs inside a setInterval every time it runs, it checks every single currently
   existing notes position. It sets a pos variable to it's current style.top and
   then it increments it, and it continues to do this separately for each note.

```javascript
noteClass.forEach(e => {
  let pos = parseInt(e.style.top) || 0;
  pos += 10;
  if (e.style.top === '660px') {
    console.log('hello');
    fails += 1;
    e.remove();
  } else {
    e.style.top = pos + 'px';
  }
}
```
3. Randomizing the time in which the notes fell added a level of difficulty to the
   game by not allowing the player to sync into the rhythm of the note production
   the rhythm of each was randomized by using the code snippet bellow inside a setInterval.
   This code ran the function randomNote with a delay of anywhere between 10 to 15 seconds,
   producing random notes within that time frame. Initially this created a massive
   wave of notes they still being produced too fast and their style.top to closely
   to each other. An if statement was added to the randomNote function stating that
   a note will only be produces if the setInterval has ran 7 times, this was tracked
   using the variable noteCounter which was incremented with the else statement.

```javascript
  setTimeout(randomNote, Math.random(Math.floor()*5000)+10000);

  function randomNote() {

    if(noteCounter === 7){
      let note = document.createElement('div');
      whichColumn(note);
      board.appendChild(note);
      noteCounter = 0;
    }
    else{
      console.log(noteCounter);
      noteCounter += 1;
    }
  }
```
## Unsolved Issues

1. The game does not start until a certain amount of time has passed, which is about
   10 seconds, this seems to be a result of the setInterval used to run the game.
   changing it inherently changes the way everything functions, so that was left as is.

2. the keyup event listeners runs within the setInterval as well, for some odd reason
   this causes the event listener to hundreds of times with a single press of a button.
   this causes a few bugs in the game. The game pauses every time a key is pressed
   due to the massive amounts of calling the eventListener and the score incrementation
   tends to be massive rather then, incrementing by 100, it increments anywhere between
   50,000 - 100,000 points



## wireframe
![wireframe](wireFrame.jpg)
