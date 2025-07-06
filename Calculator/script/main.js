const displayHere = document.getElementById("display");
const Buttons = document.querySelectorAll(".button")
const historyDisplayArea = document.querySelector(".history-display-area");
const memoryDisplayArea = document.querySelector(".memory-display-area");
const clickHistory = document.getElementById("history");
const clickMemory = document.getElementById("memory");
const historyInPhone = document.querySelector(".historyInPhone");
const Memories = document.querySelectorAll(".memory-btn");
let string = "";
let storedMemory = ""; // Memory Value

Array.from(Buttons).forEach((button) => {
 button.addEventListener("click", (e) =>{
    const btn = e.target.textContent;

    switch(btn) {
        case "=":
            evaluateExpression();
            break;
        case "⌫":
            string = string.slice(0, -1);
            displayHere.value = string;
            break;
        case "C":
        case "CE":
            string = "";
            displayHere.value = "";
            break;
        case "1/x":
            if(string !== "") {
                string = (1 / parseFloat(string)).toString();
                displayHere.value = string;
            }
            break;
        case "x²":
            if(string !== "") {
                string = Math.pow(parseFloat(string), 2).toString();
                displayHere.value = string;
                break;
            }
        case "√x":
            if(string !== "") {
                string = Math.sqrt(parseFloat(string)).toString();
                displayHere.value = string;
            }
            break;
        default:
            string += btn;
            displayHere.value = string;
    }
 })
});

// Evaluate expression & update history
function evaluateExpression () {
    let rawInput = string;
    let replacement = {
        x: "*",
        "%": "/100*",
        "÷": "/"
    }
    let expression = rawInput.replace(/x|%|÷/g, symbol => replacement[symbol])

    try{
        const result = eval(expression).toString();
        displayHere.value = result;
        updateHistory(rawInput, result);
        string = result;
    } 
    catch (error) {
        displayHere.value = "Error"
        string = "";
    }
}

// Memory Button Logic (hooked once, outside)
Memories.forEach((memoryBtn) =>{
    memoryBtn.addEventListener("click", ()=>{
        const currentValue = parseFloat(displayHere.value);
        if(isNaN(currentValue)) return;

        switch (memoryBtn.textContent){
            case "MS":
                storedMemory = currentValue;
                // memoryDisplayArea.textContent = ""; //clear old
                // memoryDisplayArea.appendChild(createParagraph("storedMemory"))
                let para = document.createElement("p");
                para.textContent = storedMemory;
                memoryDisplayArea.appendChild(para);
                memoryDisplayArea.style.display = "block"

                if(!document.querySelector(".binBtn")) {
                    const bin = document.createElement("img");
                    bin.src = "asserts/bin.png";
                    bin.alt = "Delete";
                    bin.classList.add("binBtn");
                    bin.style.cursor = "pointer";
                    memoryDisplayArea.appendChild(bin);
                    bin.addEventListener("click", () => (memoryDisplayArea.innerHTML = ""));
    }
                break;
            case "M+":
                if(storedMemory !== null) {
                    storedMemory += currentValue;
                    let para = document.createElement("p");
                    para.textContent = storedMemory;
                    memoryDisplayArea.appendChild(para);                   
                    // memoryDisplayArea.textContent = "";
                    // memoryDisplayArea.appendChild(createParagraph(storedMemory));
                }
                break;
            case "MC":
                storedMemory = null;
                memoryDisplayArea.textContent = "There's nothing saved in the memory";

                break;
        }
    });
});
// Update history + bin (one-time)
function updateHistory(input, result) {
    // const para = createParagraph(`${input} = ${result}`);
    const para = document.createElement("p")
    para.textContent = ` ${input} = ${result}`;
    historyDisplayArea.appendChild(para);
    historyDisplayArea.style.display = "block";

    const bin = document.createElement("img");
    bin.src = "asserts/bin.png";
    bin.alt = "Delete";
    bin.classList.add("binBtn");
    bin.style.cursor = "pointer";
    historyDisplayArea.appendChild(bin);
    bin.addEventListener("click", () => (historyDisplayArea.innerHTML = ""));

}

// Utility: Paragraph builder
// function createParagraph(text) {
//     const p = document.createElement("p");
//     p.textContent = text;
//     return p;
// }


// History & Memory toggling logic 

clickHistory.addEventListener("click", () =>{
    historyDisplayArea.classList.toggle("history-display-area-more-styles");
    memoryDisplayArea.style.display = "none";
    historyDisplayArea.style.display = "block";
    
});

clickMemory.addEventListener("click", () =>{
    memoryDisplayArea.classList.toggle("memory-display-area-more-styles");
    historyDisplayArea.style.display = "none";
    memoryDisplayArea.style.display = "block";
})

historyInPhone.addEventListener("click", ()=>{
    // historyDisplayArea.classList.toggle("historyInPhone");
    historyDisplayArea.classList.toggle("history-display-area-for-phone");

    const calculator = document.querySelector(".calculator");
    calculator.classList.toggle("calculator-withWhen-clickingOn-PhoneHistory-button");
})
// // declare and initialize two variable to maintain the display area 
// let zIndexForHistory = 0;
// let zIndexForMemory = 0;
// // history button to see the history of operation you have performed in the calculator 
// clickHistory.addEventListener("click", ()=>{
//     historyDisplayArea.classList.toggle("history-display-area-more-styles");
//     zIndexForHistory++;
//     historyDisplayArea.style.zIndex = zIndexForHistory;
// })
// // memory button to see what are the values are saved by the user after using the calculator
// clickMemory.addEventListener("click", ()=>{
//     memoryDisplayArea.classList.toggle("memory-display-area-more-styles");
//     zIndexForMemory++;
//     memoryDisplayArea.style.zIndex = zIndexForMemory;
// })
// // history area in phone 
// const historyInPhone = document.querySelector(".historyInPhone");
// historyInPhone.addEventListener('click', ()=>{
//     historyDisplayArea.classList.toggle("historyInPhone");
// })

// MediaMatch 
if(window.matchMedia("(max-width: 685px)").matches) {
    function updateHistory(input, result) {
    // const para = createParagraph(`${input} = ${result}`);
    const para = document.createElement("p")
    para.textContent = ` ${input} = ${result}`;
    historyDisplayArea.appendChild(para);
    // historyDisplayArea.style.display = "none";

    const bin = document.createElement("img");
    bin.src = "asserts/bin.png";
    bin.alt = "Delete";
    bin.classList.add("binBtn");
    bin.style.cursor = "pointer";
    historyDisplayArea.appendChild(bin);
    bin.addEventListener("click", () => (historyDisplayArea.innerHTML = ""));

}
}