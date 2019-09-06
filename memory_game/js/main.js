console.log("Up and running!");

//Setup cards array 
let cards = [
    {
        rank: 'queen',
        suite: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suite: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suite: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suite: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];

let cardsInPlay = [];
let gameEnded = false;
let userWinCounter = 0;
let compWinCounter = 0;

function resetGame() {
    cardsInPlay = [];
    createBoard();
}

function startGame() {
    createBoard();
}

// create initial Board function
function createBoard() {
    //create img element, then iterate through all the cards and assign initial //images & event listeners. Then assign all cards to "game-board" element
    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

//create checkForMatch function
function checkForMatch() {

    //If the first two cards flipped over match in rank, there is a match
    // otherwise, there is no match
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
        userWinCounter = userWinCounter + 1;
        document.querySelector('#userScore').textContent = userWinCounter;
    } else {
        alert("Sorry, try again.");
        compWinCounter = compWinCounter + 1;
        document.querySelector('#compScore').textContent = compWinCounter;
    }
    console.log("user" + userWinCounter + " Comp " + compWinCounter);
    //document.getElementsByTagName('restart').style.visibility = "visible";
    document.getElementsByTagName('button')[0].addEventListener('click', resetGame);
}


//Set up flipCard function
function flipCard(cardID) {
    //Set front facing card image when clicked
    this.setAttribute('src', cards[this.getAttribute('data-id')].cardImage);
    //console log card rank, suite, and img src
    console.log("User flipped " + cards[this.getAttribute('data-id')].rank + " of " + cards[this.getAttribute('data-id')].suite + " " + cards[this.getAttribute('data-id')].cardImage);
    //add rank of flipped card to cardsInPlay array
    cardsInPlay.push(cards[this.getAttribute('data-id')].rank);
    //If there are 2 cards flipped, check if thier ranks match
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}



//start Game function
startGame();

