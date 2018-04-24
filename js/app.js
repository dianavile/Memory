//Declare global LET & CONST variables (ES6)
const deck = document.getElementById('deck'); //Deck of cards
const movesEl = document.getElementById('movesEl'); //Moves 
const minutes = document.getElementById('minutes'); //Time (in minutes)
const seconds = document.getElementById('seconds'); //Time (in seconds)
const stars = document.getElementsByClassName('stars'); //Stars
const movesClass = document.getElementsByClassName('moves'); //Moves
const resButton = document.getElementsByClassName('restart'); //Restart button
let interval = null; //Interval
let oneClick = true; //OnClick 
let moves = 0; //Moves 
const timer = document.getElementsByClassName('timer'); //Timer 
let minute = 0, //minute 
  second = 0; //second 
const matchedCards = document.getElementsByClassName('match'); //MatchedCards
// const unmatchedCards = document.getElementsByClassName('unMatch'); //Declare unMatchedCards variable

//Declare Modal score settings
const modal = document.getElementById('modal'); // Modal 
const container = document.getElementById('gameStart'); //Container
let showModal = document.getElementById('gameComplete'); //show Modal
let hideModal = document.getElementById('restart'); //hide Modal
let totalMoves = document.getElementById('totalMoves').innerHTML; //totalMoves
const playAgain = document.querySelector('.restart'); //playAgain button 

/*
 * @Description: Create an Array of Objects
 * A list of 16 cards
 */
const cards = [
  'twilightsparkle.png',
  'twilightsparkle.png',
  'fluttershy.png',
  'fluttershy.png',
  'applejack.png',
  'applejack.png',
  'rarity.png',
  'rarity.png',
  'pinkypie.png',
  'pinkypie.png',
  'rainbowdash.png',
  'rainbowdash.png',
  'spike.png',
  'spike.png',
  'princescelestia.png',
  'princescelestia.png'
];

/*
 * @Description: Display the cards on the page
 * - shuffle the list of cards using the provided 'shuffle' method below
 * - loop through each card and create its HTML
 * - add each card's HTML to the page
 */
function addCards() { 
/* @Description: call shuffle function(), 
 * @parameter: cards array
 * assing the new shuffled array in shuffledCards
*/ 
  let shuffledCards = shuffle(cards);

  // call the map() method to iterate over the full array.length
  shuffledCards.map(function(val) {
    //getting deck innerHTML and adding a new innerHTML per iteration to select image
    deck.innerHTML =
      deck.innerHTML +
      `<li class='card'>
      <div class='img' style='background-image: url(img/${val});'>&emsp;</div>
    </li>`;
  });
}

/*
 *@Description:
 *the event(e) inside the function parameter 
 *allows the function to detect all events
 */
function flipCard(e) {
  //e.target to select the element the mouse cursor is pointing at
  if (e.target.classList.contains('card')) {
  //add new classes inside the targetted element
    e.target.classList.add('show');
    e.target.classList.add('open');
  }
}

/* @Description: set up the event listener for a card. 
* If a card is clicked:
* - display the card's symbol (put functionality in another function to call from this one)
* - add the card to a *list* of 'open' cards (put functionality in another function to call from this one)
*/

//Call this function when loading browser
(function() {
  const deck = document.getElementById('deck');
  addCards();

  deck.addEventListener('click', function(e) {
    if (!interval) {
      startTimer();
    }

    /*@Description: if statement allows to verify IF cards 
    * are clickable ONLY when cards facing up (openCards) are less then 2
    */ 
    if (deck.getElementsByClassName('open').length < 2) {
      flipCard(e);
    }

   /*@Description: if statement allows to verify IF cards (elements)
    * are clickable ONLY when cards facing up (openCards) are 2 or more
    */ 
     if (deck.getElementsByClassName('open').length == 2 && oneClick) {
        setTimeout(function() {     // set an interval to
          verifyCard(deck.getElementsByClassName('open')); //call function for delay
        oneClick = true;
        if (matchedCards.length === 16) {
          gameComplete();
          console.log('matchedCards');
        }
      }, 1500); //with 1,5 seconds of delay
      movesCounter();
      oneClick = false;
    }
  });

  for (let button of resButton) { //restart the game
    button.addEventListener('click', function(e) {
      restart();
    });
  }
})();

  /*@description: this element(el) contains the class open
   * Element need to be in position 0, as once 1 el is removed
   * the position of the other element will transform to 0
   */ 
function faceCardDown(el) {
  el[0].classList.remove('show');
  el[0].classList.remove('open');
  el[0].classList.remove('show');
  el[0].classList.remove('open');
}

 /*@description: function check if cards MATCH
   * IF MATCH, show the cards, leave the cards open
   * IF NO MATCH, close the cards
   */ 
function verifyCard(el, DECK) {
  if (el[0].children[0].classList[1] == el[1].children[0].classList[1]) {
    el[0].classList.add('match');
    el[1].classList.add('match');
    el[0].classList.remove('show');
    el[0].classList.remove('open');
    el[0].classList.remove('show');
    el[0].classList.remove('open');
  } else {
    setTimeout(faceCardDown(el), 1500);
  }
}

 /*@description: function game complete
   * The game ends if all 16 cards are matched
   * Game complete modal appears with score settings stars, time and moves
   * and Container (deck of cards) disappears
   */ 
function gameComplete() {
  modal.style.display = 'block'; //Make Modal appear on screen
  container.style.display = 'none'; //Make Container (deck) disappear from screen
  stars[1].innerHTML = stars[0].innerHTML;
  timer[1].innerHTML = 'Time: ' + timer[0].innerHTML;
  movesClass[1].innerHTML = movesClass[0].innerHTML;
  console.log('game Complete');
}

 /*@description: function to restart the game
   * Game restart modal disappears & container (deck of cards appears)
   */ 
function restart() { // Restart the game
  modal.style.display = 'none'; //Let Modal disappear from screen
  container.style.display = 'flex'; //Make Container (deck) appear from the screen
  moves = 0;
  second = 0;
  minute = 0;
  console.log('restart');
  clearInterval(interval);  // clears interval
  interval = null; //gives value null to interval
  movesEl.innerHTML = 0;
  timer[0].innerHTML = '00:00';

  for (let star of stars[0].children) {
    star.style.visibility = 'initial';
  }
  for (let card of deck.children) {
    card.classList.remove('match');
  }
}

// function for Moves
function movesCounter() {
  moves = moves + 1;
  movesEl.innerHTML = moves; //start timer on first click

  if (moves > 10 && moves < 15) { //set starRating based on moves
    for (i = 0; i < 3; i++) {
      if (i > 1) {
        stars[0].children[i].style.visibility = 'collapse';
      }
    }
  } else if (moves > 20) {
    for (i = 0; i < 3; i++) {
      if (i > 0) {
        stars[0].children[i].style.visibility = 'collapse';
      }
    }
  }
}

// function to verify if cards MATCH
function verifyCard(el, DECK) {
  if (el[0].children[0].getAttribute('style') == el[1].children[0].getAttribute('style')) {
    el[0].classList.add('match');
    el[1].classList.add('match');
    el[0].classList.remove('show');
    el[0].classList.remove('open');
    el[0].classList.remove('show');
    el[0].classList.remove('open');
  } else {
    setTimeout(faceCardDown(el), 1500);
  }
}

// function to start the Timer
function startTimer() {
  interval = setInterval(function() {
    if (second.toString().length == 1 && minute.toString().length == 1) {
      timer[0].innerHTML = '0' + minute + ':0' + second;
    } else if (second.toString().length == 2 && minute.toString().length == 1) {
      timer[0].innerHTML = '0' + minute + ':' + second;
    } else if (minute.toString().length == 1 && second.toString().length == 2) {
      timer[0].innerHTML = '0' + minute + ':' + second;
    } else {
      timer[0].innerHTML = minute + ':' + second;
    }

    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);//time in miliseconds (1 sec.)
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* @Description: game requirements
 * set up the event listener for a card. 
 * If a card is clicked:
 * - display the card's symbol (put this functionality in another function that you call from this one)
 * - add the card to a *list* of 'open' cards (put this functionality in another function that you call from this one)
 * If the list second card, check to see if the two cards match
 * - IF CARDS MATCH: lock the cards in open position (put functionality in another function to call from this one)
 * - IF CARDS DO NOT MATCH: remove the cards from the list, hide the card's symbol (put functionality in another function to call from this one)
 * Increment MOVE counter and display on the page (put functionality in another function to call from this one)
 * - IF ALL CARDS MATCHED: display message with the final score (put functionality in another function to call from this one)
 */