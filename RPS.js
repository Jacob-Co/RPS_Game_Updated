var person = prompt("Welcom! To start the game, please enter your name", " ");
alert('Rock, Paper, Scissors, race till 5. Good luck!')

var playerChoice = "o";
var computerChoice = "o";
var playerChoiceValue = null;
var computerChoiceValue = null;
// var computedValue = playerChoiceValue + computerChoiceValue; Does not work when outside
var wins = 0;
var loses = 0;
var ties = 0;


function chooseComputer() {computerChoiceValue = Math.floor(Math.random()*3); 
    if (computerChoiceValue == 0) {computerChoice = "rock"} 
    else if (computerChoiceValue == 1) {computerChoice = "paper"}
    else if (computerChoiceValue == 2) {computerChoice = "scissors"};
};

function chooseRockPlayer() {playerChoice = "rock"; playerChoiceValue = 10; playGame();};
function choosePaperPlayer() {playerChoice = "paper"; playerChoiceValue = 20; playGame();};
function chooseScissorsPlayer() {playerChoice = "scissors"; playerChoiceValue = 30; playGame();};

function playGame() {chooseComputer(); var computedValue = playerChoiceValue + computerChoiceValue;
    if (playerChoice == computerChoice)
    {alert('Tie!, ' + playerChoice + ' and ' + computerChoice + '.'); 
    gameTies.textContent = gameTies.textContent.replace(ties, ++ties);
    }
    else if (computedValue == 12 || computedValue == 20 || computedValue == 31 ) { 
        alert('Win!, ' + playerChoice + ' beats ' + computerChoice + '.');  
        playerWins.textContent = playerWins.textContent.replace(wins, ++wins);
    } else {
        alert('Lose!, ' + playerChoice + ' loses to ' + computerChoice + '.'); 
        computerWins.textContent = computerWins.textContent.replace(loses, ++loses);
    };

    if (wins == 5) 
    {alert("Congratulations, you won " + wins + ' to ' + loses + " Let's play again!");
        wins = 0; loses = 0; ties = 0}
    else if (loses == 5) 
    {alert("Sorry, you lost" + wins + ' to ' + loses + " Let's play again!"); 
        wins = 0; loses = 0; ties = 0}

};


const rock = document.querySelector('#rock');
rock.addEventListener('click',chooseRockPlayer);

const paper = document.querySelector('#paper');
paper.addEventListener('click', choosePaperPlayer);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', chooseScissorsPlayer);


var playerWins = document.querySelector('#playerWins');
playerWins.textContent = person + '\'s wins: ' + wins;

var computerWins = document.querySelector('#computerWins');
computerWins.textContent = 'Computer wins: ' + loses;

var gameTies = document.querySelector('#gameTies');
gameTies.textContent = 'Ties: ' + ties;
