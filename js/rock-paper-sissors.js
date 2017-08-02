/* eslint-disable no-unused-vars */
function generateComputerChoice( num ){
    var choice = "sissors";

    if( num <= 0.33 ){
        choice = "rock";
    }
    else if( num >= 0.66 ){
        choice = "paper";
    }

    return choice;
}

function checkForComputerWin( user, computer ){
    var rockPaper = user === "rock" && computer === "paper";
    var paperSissors = user === "paper" && computer === "sissors";
    var sissorsRock = user === "sissors" && computer === "rock";

    return rockPaper || paperSissors || sissorsRock;
}

function compareChoices( user, computer ){
    var result = "user wins!";

    if( user === computer ){
        result = "it's a tie!";
    }
    else if( checkForComputerWin( user, computer ) ){
        result = "computer wins!";
    }

    return result;
}

function playRockPaperSissors(){
    var user = prompt( "Choose rock, paper, or sissors!" );
    var random = Math.random();
    var computer = generateComputerChoice( random );
    var result = compareChoices( user, computer );

    document.querySelector( "#output" ).textContent = result;
}
