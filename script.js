let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let value = (Math.random() * 3);

    if(value < 1){
        return 'rock';
    } else if(value < 2){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice(){
    let humanChoice = prompt('Rock, paper or scissors?').toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);


    if(humanChoice === computerChoice){
        console.log('Tie! None wins or loses.');
    } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper')){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanChoice++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);

