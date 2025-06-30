const forwardCountingBtn = document.getElementById("increasing")
const decreasingCountingBtn = document.getElementById("decreasing")
const resetBtn = document.getElementById("reset")
const renderNumber = document.getElementById("number")
let count = 0;

forwardCountingBtn.addEventListener("click",() =>{
    count ++;
    DisplayTheNumber(count)
})

decreasingCountingBtn.addEventListener("click", () =>{
    count --;
    DisplayTheNumber(count);
})
resetBtn.addEventListener("click", () =>{
    count = 0;
    DisplayTheNumber(count);
})

function DisplayTheNumber (num) {
    renderNumber.textContent = num;
    if (count > 0) {
        renderNumber.style.color = "Green"
    } 
    else if(count < 0) {
        renderNumber.style.color = "Yellow"
    }
    else{
        renderNumber.style.color = "White"
    }
}

