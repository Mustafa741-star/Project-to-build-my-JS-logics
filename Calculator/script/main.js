const displayHere = document.getElementById("display");
const Buttons = document.querySelectorAll(".button")
const historyDisplayArea = document.querySelector(".history-display-area");
const binBtn = document.querySelector(".binBtn");
const clickHistory = document.getElementById("history");
const clickMemory = document.getElementById("memory");
const memoryDisplayArea = document.querySelector(".memory-display-area");
let string = "";

Array.from(Buttons).forEach((button) => {
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "=") {
            let expression = string;
            expression = expression.replace(/x/g, "*");
            expression = expression.replace(/%/g, "/100*");
            expression = expression.replace(/÷/g, "/");
            try {
                expression = eval(expression).toString();
                displayHere.value = expression;
            } catch (error) {
                displayHere.value = "Error"
                string = ""
            }
            let paraInHistory = document.createElement("p")
            paraInHistory.textContent = `${string} = ${expression}`;
            historyDisplayArea.appendChild(paraInHistory);

            historyDisplayArea.classList.add("history-display-area-more-styles"); // I use this thing for first time here!

            binBtn.addEventListener("click", ()=>{
                paraInHistory.remove();
            })

        }
        else if(e.target.innerHTML == "⌫") {
            string = string.slice(0, string.length-1);
            displayHere.value = string;
        }
        else if(e.target.innerHTML == "C" || e.target.innerHTML == "CE") {
            string = ""
            displayHere.value = string;
        }
        else if(e.target.innerHTML == "1/x"){
            if(string !== "") {
                string = (1 / parseFloat(string)).toString();
                displayHere.value = string;
            }
        }
        else if(e.target.innerHTML == "x²") {
            if(string !== "") {
                string = (Math.pow(parseFloat(string), 2)).toString();
                displayHere.value = string;
            }
        } 
        else if(e.target.innerHTML == "√x"){
            if(string !== ""){
                string = (Math.sqrt(parseFloat(string))).toString();
                displayHere.value = string;
            }
        }
        else{            
        string += e.target.textContent;
        displayHere.value = string;
        }

    })
});
// declare and initialize two variable to maintain the display area 
let zIndexForHistory = 0;
let zIndexForMemory = 0;
// history button to see the history of operation you have performed in the calculator 
clickHistory.addEventListener("click", ()=>{
    historyDisplayArea.classList.add("history-display-area-more-styles");
    zIndexForHistory++;
    historyDisplayArea.style.zIndex = zIndexForHistory;
})
// memory button to see what are the values are saved by the user after using the calculator
clickMemory.addEventListener("click", ()=>{
    memoryDisplayArea.classList.add("memory-display-area-more-styles");
    zIndexForMemory++;
    memoryDisplayArea.style.zIndex = zIndexForMemory;
})