// Tic-Tac-Toe Game Logic in JavaScript

let boxes = document.querySelectorAll(".box"); // the selaction of boxes with class
let RestBtn = document.querySelector("#resertBtn")
let NewgameBtn = document.querySelector(".new-game-btn")
let messagContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true; 

const winPattern = [
    [0, 1, 2], // Top row
    [0, 3, 6], // Left column
    [0, 4, 8], // Diagonal
    [1, 4, 7], // Center column
    [2, 5, 8], // Right column
    [2, 4, 6], // Anti-diagonal
    [3, 4, 5], // Middle row
    [6, 7, 8]  // Bottom row
];


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("Button was clicked.")
        if (box.innerText === ""){
            if(turnO){
                box.innerText = "O";
                turnO = false
            }else {
                box.innerText = "X";
                turnO = true;
            }
            winnerCheck()
        }
    });
});


const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is  ${winner} !`
    messagContainer.classList.remove("hide");
    DisableBox();
}


const winnerCheck = () => {
    for (let pattern of winPattern){
        let Value1 = boxes[pattern[0]].innerText;
        let Value2 = boxes[pattern[1]].innerText;
        let Value3 = boxes[pattern[2]].innerText;
        if (Value1 !== "" && Value1 === Value2 && Value2 === Value3){
            showWinner(Value1);
            return;
        }
    }

}


// this is a Function to disable all boxes
const DisableBox = () => {
    for(let box in boxes){
        box.disabled = true;
    } 
};

// this is a Function to enable and clear all boxes
const enableBox = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


// This is a function  for a  reset The game 
const ResetGame = () => {
    turnO = true; //Reset to 'O' turn
    enableBox()   // Enable and clear all boxes
    msg.innerText = "";   // Clear the message
    messagContainer.classList.add("hide"); // Hide the message container
}

// Add event listener to the reset button 
RestBtn.addEventListener("click", ResetGame);
NewgameBtn.addEventListener("click", ResetGame)

