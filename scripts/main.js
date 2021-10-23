let box = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];


function playerInput(square) {

    if (box[square]  == 1) {
        document.getElementById("gameStatusText").innerHTML = "That square is already in use!";

    } else {
        
        document.getElementById(square).innerHTML = "X";
        document.getElementById(square).style.cursor = "default";
        box[square] = 1;

        easyComputerInput();
        

    }
    
}

function easyComputerInput() {
        
    let randomPick = Math.floor((Math.random() * 8) + 1);

    while (box[randomPick] == 1) {

        randomPick = Math.floor((Math.random() * 8) + 1);

    }

    document.getElementById(randomPick).innerHTML = "O";
    document.getElementById(randomPick).style.cursor = "default";
    box[randomPick] = 1;
}