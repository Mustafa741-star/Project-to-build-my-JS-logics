const displayHere = document.getElementById("display");
const Buttons = document.querySelectorAll(".button")
let string = "";
const historyDisplayArea = document.querySelector(".history-display-area");
const binBtn = document.querySelector(".binBtn");

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
binBtn.addEventListener("click", () =>{
    historyDisplayArea.paraInHistory = "";
})