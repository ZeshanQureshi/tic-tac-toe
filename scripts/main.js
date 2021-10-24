let boxUsage = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
let boxValue = ["" , "" , "" , "" , "" , "" , "" , "" , "" ];
let gameWon = 0;


function playerInput(square) {
    
    clearGameStatus();

    if (boxUsage[square]  == 1) {
        document.getElementById("gameStatusText").innerHTML = "That square is already in use!";

        setTimeout(clearGameStatus, 2000);
 

    } else {
        
        displayLetter(square, "X");

        let playerWon = checkGameStatus(gameWon);

        if (playerWon == 1) {
            
            document.getElementById("gameStatusText").innerHTML = "Player Wins!";
            endGame();

        } else {
            
            if (document.getElementById("difficultySelector").value == "easy") {
                
                easyComputerInput();

                let computerWin1 = checkGameStatus(gameWon);

                if (computerWin1 == 2 ) {

                    document.getElementById("gameStatusText").innerHTML = "Computer Wins!";
                    endGame();

                }

            } else if (document.getElementById("difficultySelector").value == "hard") {

                hardComputerInput();

                
                let computerWin2 = checkGameStatus(gameWon);

                if (computerWin2 == 2 ) {

                    document.getElementById("gameStatusText").innerHTML = "Computer Wins!";
                    endGame();

                }

                
                
            }

            
        }
         
    }
    
}

function easyComputerInput() {
        
    let randomPick = Math.floor((Math.random() * 8) + 1);

    if (boxUsage[0] == 0 || boxUsage[1] == 0 || boxUsage[2] == 0 || 
        boxUsage[3] == 0 || boxUsage[4] == 0 || boxUsage[5] == 0 || 
        boxUsage[6] == 0 || boxUsage[7] == 0 || boxUsage[9] == 0) {
    
        while (boxUsage[randomPick] == 1) {
            randomPick = Math.floor((Math.random() * 8) + 1);
        }

        displayLetter(randomPick, "O");

    
    } else {

        document.getElementById("gameStatusText").innerHTML = "No winner!";

    }
    
}


function hardComputerInput() {
    
}

function endGame() {
    for (let i = 0; i <= 9 ; i++) {
        document.getElementById(i).style.pointerEvents = "none";
    }
}

function displayLetter (boxNum, text) {
    document.getElementById(boxNum).innerHTML = text;
    document.getElementById(boxNum).style.cursor = "default";
    boxUsage[boxNum] = 1;
    boxValue[boxNum] = text;
}

function clearGameStatus() {
    document.getElementById("gameStatusText").innerHTML = "";
}

function checkGameStatus(gameCondition) {
    
    if (boxValue[0] == "X" && boxValue[1] == "X" && boxValue[2] == "X" ||
        boxValue[3] == "X" && boxValue[4] == "X" && boxValue[5] == "X" ||
        boxValue[6] == "X" && boxValue[7] == "X" && boxValue[8] == "X" ||
        boxValue[0] == "X" && boxValue[3] == "X" && boxValue[6] == "X" ||
        boxValue[1] == "X" && boxValue[4] == "X" && boxValue[7] == "X" ||
        boxValue[2] == "X" && boxValue[5] == "X" && boxValue[8] == "X" ||
        boxValue[0] == "X" && boxValue[4] == "X" && boxValue[8] == "X" ||
        boxValue[2] == "X" && boxValue[4] == "X" && boxValue[6] == "X" ) {

            gameCondition = 1;

    } else if (boxValue[0] == "O" && boxValue[1] == "O" && boxValue[2] == "O" ||
               boxValue[3] == "O" && boxValue[4] == "O" && boxValue[5] == "O" ||
               boxValue[6] == "O" && boxValue[7] == "O" && boxValue[8] == "O" ||
               boxValue[0] == "O" && boxValue[3] == "O" && boxValue[6] == "O" ||
               boxValue[1] == "O" && boxValue[4] == "O" && boxValue[7] == "O" ||
               boxValue[2] == "O" && boxValue[5] == "O" && boxValue[8] == "O" ||
               boxValue[0] == "O" && boxValue[4] == "O" && boxValue[8] == "O" ||
               boxValue[2] == "O" && boxValue[4] == "O" && boxValue[6] == "O") {

                    gameCondition = 2;

               }
    

    return gameCondition;
}

function clearGame() {
    for (i = 0; i <= 8 ; i++) {
        document.getElementById(i).innerHTML = "";
        document.getElementById(i).style.cursor = "pointer";
        document.getElementById(i).style.pointerEvents = "auto";

        boxUsage[i] = 0;
        boxValue[i] = "";
    }

    document.getElementById("gameStatusText").innerHTML = "Welcome! Click a square to begin.";
    gameWon = 0;
}