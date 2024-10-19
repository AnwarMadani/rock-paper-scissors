// // let humanScore = 0;
// // let computerScore = 0;

// function getComputerChoice(){
//     let value = (Math.random() * 3);

//     if(value < 1){
//         return 'rock';
//     } else if(value < 2){
//         return 'paper';
//     } else {
//         return 'scissors';
//     }
// }

// function getHumanChoice(){
//     let humanChoice = prompt('Rock, paper or scissors?').toLowerCase();
//     return humanChoice;
// }

// // function playRound(humanChoice, computerChoice){
// //     console.log(`You chose ${humanChoice}`);
// //     console.log(`Computer chose ${computerChoice}`);


// //     if(humanChoice === computerChoice){
// //         console.log('Tie! None wins or loses.');
// //     } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper')){
// //         console.log(`You won! ${humanChoice} beats ${computerChoice}`);
// //         humanChoice++;
// //     } else {
// //         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
// //         computerScore++;
// //     }
// // }

// // const humanSelection = getHumanChoice();
// // const computerSelection = getComputerChoice();

// // playRound(humanSelection, computerSelection);

// function playGame(){
//     let humanScore = 0;
//     let computerScore = 0;
    
//     for (let i = 0; i < 5; i++){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         console.log(`Your score: ${humanScore}`);
//         console.log(`Computer score: ${computerScore}`);
//     }

//     if (humanScore > computerScore){
//         console.log('You won the Game! GG!')
//     } else if(computerScore > humanScore){
//         console.log('The computer won! :(')
//     } else {
//         console.log('Tie! There are no winner or losers, only losers here.');
//     }

//     function playRound(humanChoice, computerChoice){
//         console.log(`You chose ${humanChoice}`);
//         console.log(`Computer chose ${computerChoice}`);
    
    
//         if(humanChoice === computerChoice){
//             console.log('Tie! None wins or loses.');
//         } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper')){
//             console.log(`You won! ${humanChoice} beats ${computerChoice}`);
//             humanScore+=1;
//         } else {
//             console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//             computerScore+=1;
//         }
//     }
// }

// playGame();

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