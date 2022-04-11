const computerPlay = () => {

    let computerSelection = null;
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerSelection = 'rock';

    } else if (randomNumber === 2) {
        computerSelection = 'paper';

    } else if (randomNumber === 3) {
        computerSelection = 'scissor';
    }

    return computerSelection;

}



const playRound = (playerSelection, computerSelection) => {

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        roundWinner = 'Draw'
    } else {

        switch (playerSelection.toLowerCase()) {
            case 'rock':
                if (computerSelection.toLowerCase() === 'paper') {
                    roundWinner = 'Computer';
                } else if (computerSelection.toLowerCase() === 'scissor') {
                    roundWinner = 'You';
                }
                break;

            case 'paper':
                if (computerSelection.toLowerCase() === 'scissor') {
                    roundWinner = 'Computer';
                } else if (computerSelection.toLowerCase() === 'rock') {
                    roundWinner = 'You';
                }
                break;
            case 'scissor':
                if (computerSelection.toLowerCase() === 'rock') {
                    roundWinner = 'Computer';
                } else if (computerSelection.toLowerCase() === 'paper') {
                    roundWinner = 'You';
                }

                break;
            default:
                roundWinner = 'Something went wrong';


        }

    }

    return roundWinner;

}



const announceWinner = (playerScore, computerScore) => {


    if (playerScore === computerScore) {
        gE_infoTextField.innerText = 'It is a draw in total';

    } else if (playerScore < computerScore) {
        gE_infoTextField.innerText = 'You loose the game.';

    } else if (playerScore > computerScore) {
        gE_infoTextField.innerText = 'You win the game!';
    }

}



const actualizeScore = (winner) => {

    if (winner === 'You') {
        playerScore++;
        gE_playerScoreField.innerText = `${playerScore}`;
        gE_infoTextField.innerText = `${roundWinner} scored`

    } else if (winner === 'Computer') {
        computerScore++;
        gE_computerScoreField.innerText = `${computerScore}`;
        gE_infoTextField.innerText = `${roundWinner} scored`

    } else if (winner === 'Draw') {
        computerScore++;
        playerScore++;
        gE_playerScoreField.innerText = `${playerScore}`;
        gE_computerScoreField.innerText = `${computerScore}`;
        gE_infoTextField.innerText = `Point for both`

    } else {
        console.log('something went wrong');
    }

}


const playRoundHandler = (event) => {

    const playerSelection = event.currentTarget.innerText;
    const computerSelection = computerPlay();
    let roundWinner = playRound(playerSelection, computerSelection);

    actualizeScore(roundWinner);


    if (playerScore === 5 || computerScore === 5) {

        announceWinner(playerScore, computerScore);

        selectRock.disabled = true;
        selectPaper.disabled = true;
        selectScissor.disabled = true;

        restartGameButton.disabled = false;

        computerScore = 0;
        playerScore = 0;


    }

}

const endGameHandler = (e) => {

    selectRock.removeEventListener('click', playRoundHandler);
    selectPaper.removeEventListener('click', playRoundHandler);
    selectScissor.removeEventListener('click', playRoundHandler);
    playGameButton.removeEventListener('click', game);
    this.currentTarget.removeEventListener('click', endGameHandler);
}

const restartGameHandler = (e) => {

    if (selectPaper.disabled || selectRock.disabled || selectScissor.disabled) {

        selectPaper.disabled = false;
        selectRock.disabled = false;
        selectScissor.disabled = false;

    }

    gE_computerScoreField.innerText = `${computerScore}`;
    gE_playerScoreField.innerText = `${playerScore}`;
}


const game = () => {

    if (endGameButton.disabled) {

        endGameButton.disabled = false;
    }

    gameArea.append(selectRock, selectPaper, selectScissor);
    document.body.append(gE_resultArea);

    selectRock.addEventListener('click', playRoundHandler);
    selectPaper.addEventListener('click', playRoundHandler);
    selectScissor.addEventListener('click', playRoundHandler);
}



let computerScore = 0;
let playerScore = 0;
let roundResult = '';



const gameArea = document.createElement('div');
const mainButtons = document.createElement('div');

document.body.append(mainButtons, gameArea);

const playGameButton = document.createElement('button');
const restartGameButton = document.createElement('button');
const endGameButton = document.createElement('button');

const gE_resultArea = document.createElement('div');
const gE_playerScoreField = document.createElement('div');
const gE_computerScoreField = document.createElement('div');
const gE_infoTextField = document.createElement('div');

playGameButton.innerText = 'Start the Game';
playGameButton.style.cssText = 'margin-right: 2rem';

restartGameButton.innerText = 'Restart Game';
restartGameButton.disabled = true;

endGameButton.innerText = 'End the Game';
endGameButton.disabled = true;

mainButtons.style.cssText = 'margin-bottom: 6rem'
mainButtons.append(playGameButton, restartGameButton, endGameButton);

gE_resultArea.style.cssText = 'display: flex; justify-content: space-evenly';
gE_computerScoreField.style.cssText = 'font-size: 8rem';
gE_playerScoreField.style.cssText = 'font-size: 8rem';
gE_infoTextField.style.cssText = 'display: block; font-size: 4rem';

gE_playerScoreField.innerText = `${playerScore}`;
gE_computerScoreField.innerText = `${computerScore}`;
gE_infoTextField.innerText = `Let's start the game`;

gE_resultArea.append(gE_playerScoreField, gE_computerScoreField, gE_infoTextField);

playGameButton.addEventListener('click', game);
restartGameButton.addEventListener('click', restartGameHandler);
endGameButton.addEventListener('click', endGameHandler);

const selectRock = document.createElement('button');
const selectPaper = document.createElement('button');
const selectScissor = document.createElement('button');
selectRock.innerText = 'Rock';
selectPaper.innerText = 'Paper';
selectScissor.innerText = 'Scissor';