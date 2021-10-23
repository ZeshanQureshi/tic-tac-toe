let box = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];


function playerInput(square) {

    if (box[square]  == 1) {
        document.getElementById("gameStatusText").innerHTML = "That square is already in use!";

    } else {
        
        document.getElementById(square).innerHTML = "X";
        document.getElementById(square).style.cursor = "default";
        box[square] = 1;

        if (playerWin() == 1) {
            document.getElementById("gameStatusText").innerHTML = "That square is already in use!";
        } else {
            easyComputerInput(); 

        }
        

    }
    
}

function easyComputerInput() {
        
    let randomPick = Math.floor((Math.random() * 8) + 1);

    if (box[0] == 0 || box[1] == 0 || box[2] == 0 || 
        box[3] == 0 || box[4] == 0 || box[5] == 0 || 
        box[6] == 0 || box[7] == 0 || box[9] == 0) {
    
        while (box[randomPick] == 1) {
            randomPick = Math.floor((Math.random() * 8) + 1);
        }

        document.getElementById(randomPick).innerHTML = "O";
        document.getElementById(randomPick).style.cursor = "default";
        box[randomPick] = 1;
    
    } else {

        document.getElementById("gameStatusText").innerHTML = "No winner!";

    }
    
}