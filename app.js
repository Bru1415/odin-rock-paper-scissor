// computer makes a random decision between rock paper scissor
    //function computerPlay
    //BEGIN
    //make variable computersDecison that holds the decision (rock paper scissor)
    //make a random value between 1-3 and give computersDecision 
        //IF random === 1  then rock
        //ELSE IF random === 2 then paper
        //ELSE IF random === 3 then scissor

    //RETURN computersDecison


    const computerPlay = () => {

        let computerSelection = null;
        let randomNumber = Math.floor(Math.random() * 3)+1;

        if(randomNumber === 1){
            computerSelection = 'rock';

        }
        else if(randomNumber === 2){
            computerSelection = 'paper';

        }
        else if(randomNumber === 3){
            computerSelection = 'scissor';
        }
        // console.log(computersDecison);
        
        return computerSelection;


    }




// the gamer is asked for his decision rock paper scissor


// the two values (random number, gamer's decision) are compared against rules => one round
    //FUNCTION (computerSelection, playerSelection )
    //IF computerSelection equals playerSelection then RETURN Draw
    //ELSE
    //CASES for rock paper scissor
    //RETURN winner of round
    
    const playRound = (playerSelection, computerSelection) => 
    {

        if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
        {
            return 'draw'
        }
        else{

            switch(playerSelection.toLowerCase())
            {
                case 'rock':
                    if(computerSelection.toLowerCase() === 'paper'){
                        return 'Computer wins';
                    }else if(computerSelection.toLowerCase() === 'scissor'){
                        return 'You win';
                    }

                case 'paper':
                    if(computerSelection.toLowerCase() === 'scissor'){
                        return 'Computer wins';
                    }else if(computerSelection.toLowerCase() === 'rock'){
                        return 'You win';
                    }

                case 'scissor':
                    if(computerSelection.toLowerCase() === 'rock'){
                        return 'Computer wins';
                    }else if(computerSelection.toLowerCase() === 'paper'){
                        return 'You win';
                    }
                    default:
                        return 'Something went wrong';


            }

        }



    }


// the comparison is repeated 5 times (rounds) at the end the total wins decide who won the game
    //FUNCTION game()
    //ask for players selection and put it into VARIABLE
    //call computerPlay and store result in VARIABLE
    //make VARIABLES that hold player and computer score 
    //LOOP 5 times 
        //play round
        //actualize scores
    //LOOP END
    //RETURN 
    //FUNCTION END
