let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
let humanScoreHolder = document.querySelector('.human-score');
let computerScoreHolder = document.querySelector('.computer-score');
let round = document.querySelector('.round');

rockBtn.addEventListener("click", () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener("click", () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound('scissors', getComputerChoice()));


    function playRound(humanChoice, computerChoice){
        
        round.innerHTML = '';

        const yourChoice = document.createElement('h3');
        yourChoice.textContent = `You chose ${humanChoice}`;

        const cChoice = document.createElement('h3');
        cChoice.textContent = `Computer chose ${computerChoice}`;

        const roundResult = document.createElement('h3');

        console.log(`You chose ${humanChoice}`);
        console.log(`Computer chose ${computerChoice}`);
    
    
        if(humanChoice === computerChoice){
            console.log('Tie! None wins or loses.');
            roundResult.textContent = 'Tie! None wins or loses.';
        } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper')){
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            roundResult.textContent = `You won! ${humanChoice} beats ${computerChoice}`;
            humanScore+=1;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore+=1;
        }

        if(computerScore >=5){
            const winner = document.createElement('h1');
            winner.textContent = 'The Computer wins the game!';
            winner.style.color = 'red';
            winner.textContent = 'You won the game!'
            round.appendChild(winner);
        } else if(humanScore >= 5){
            const winner = document.createElement('h1');
            winner.style.color = 'red';
            winner.textContent = 'You won the game!'
            round.appendChild(winner);
        }

        if((humanScore >= 5) || (computerScore >= 5)){
            humanScore = 0;
            computerScore = 0;
        }
        humanScoreHolder.textContent = humanScore;
        computerScoreHolder.textContent = computerScore;
        round.appendChild(yourChoice);
        round.appendChild(cChoice);
        round.appendChild(roundResult);
    }

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