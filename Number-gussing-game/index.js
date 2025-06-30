const showResultHere = document.getElementById("showResult");
const inputField = document.getElementById("inputField");
const checkBtn = document.getElementById("check");
const previousRecordShowHere = document.getElementById("previousRecord");
const remainingAttemptsShowHere = document.getElementById("remainingAttempts");
const resultAfterLoss = document.getElementById("displayAfterLoss");
const NewGameBtn = document.getElementById("newGame");

let previousRecord = [];
let remainingAttempts = 10;
let play = true;

let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log("random number", randomNumber)

if(play){
    checkBtn.addEventListener("click", function(e){
        e.preventDefault();
        let guess = parseInt(inputField.value);
        Validation(guess);
    })
}
function Validation(guess){
    if(inputField.value === ""){
        alert("Please enter something")
    }
    else if(guess < 1){
        alert("Please enter number greater than 1!")
    } else if(guess > 100) {
        alert("Please enter numbers less than 100!")
    } else if(isNaN(guess)) {
        alert("Please enter only numbers!")
    } else{
        if(remainingAttempts === 0){
            endGame();
        } else{
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess < randomNumber){
        showResultHere.textContent = "too low"
    } else if(guess > randomNumber){
        showResultHere.textContent = "too high"
    } else if(guess == randomNumber){
        showResultHere.textContent = "You guessed right"
    }
    Display(guess);
}
function Display(guess){
    previousRecord.push(guess);
    previousRecordShowHere.textContent =  ` Previous Records:${previousRecord},`
    remainingAttempts--;
    remainingAttemptsShowHere.textContent = `Remaining Attempts: ${remainingAttempts}`
}
function endGame(){
    play = false;
    inputField.disabled = true;
    checkBtn.disabled = true;
    resultAfterLoss.textContent = `You are not able to guess the number ${randomNumber}`;
    console.log("hello")
}
NewGameBtn.addEventListener("click", NewGame)

function NewGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    play = true
    previousRecord = []
    remainingAttempts = 10
    inputField.disabled = false;
    checkBtn.disabled = false;
    inputField.value = "";
    showResultHere.textContent = "";
    resultAfterLoss.textContent = "";
    previousRecordShowHere.textContent =  ` Previous Records:${previousRecord}`
    remainingAttemptsShowHere.textContent =  ` Previous Records:${remainingAttempts}`

}