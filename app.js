// computer makes a random decision between rock paper scissor
    //function computerPlay
    //BEGIN
    //make variable computersDecison that holds the decision (rock paper scissor)
    //make a random value between 1-3 and give computersDecision 
        //IF random === 1  then rock
        //ELSE IF random === 2 then paper
        //ELSE IF random === 3 then scissor

    //RETURN compzutersDecison


    const computerPlay = () => {

        let computersDecison = null;
        let randomNumber = Math.floor(Math.random() * 3)+1;

        if(randomNumber === 1){
            computersDecison = 'rock';

        }
        else if(randomNumber === 2){
            computersDecison = 'paper';

        }
        else if(randomNumber === 3){
            computersDecison = 'scissor';
        }
        // console.log(computersDecison);
        
        return computersDecison;


    }




// the gamer is asked for his decision rock paper scissor


// the two values (random number, gamer's decision) are compared against rules => one round



// the comparison is repeated 5 times (rounds) at the end the total wins decide who won the game

