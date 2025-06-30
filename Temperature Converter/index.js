let inputField = document.getElementById("enterValueHere");
const convertBtn = document.getElementById("ConverterBtn");
const showTheResultHere = document.getElementById("showResultHere");
const toggleBtnMode = document.getElementById("TogglingMode");
const inputsLabel = document.getElementById("enterTemperatureHere");

let isCelsius = true;

convertBtn.addEventListener("click",TemperatureConverter);
toggleBtnMode.addEventListener("click", toggleMode);


function TemperatureConverter (e) {
     e.preventDefault();
    let userInput = inputField.value;
    let output;
    if(userInput === "") {
        showTheResultHere.textContent = "Please enter a value."
    }
    else if(isCelsius){
        output = userInput * (9/5) + 32;
        showTheResultHere.textContent = `${userInput}℃ = ${output.toFixed(3)}℉`;
    } else{
        output = (userInput - 32) * 5/9;
        showTheResultHere.textContent = `${userInput}℉ = ${output.toFixed(3)}℃`;
    }
}
function toggleMode(){
    isCelsius = !isCelsius;

    inputsLabel.textContent = 
    isCelsius? "Celsius to Fahrenheit":"Fahrenheit to Celsius"

    inputField.placeholder = 
    isCelsius? "Enter Celsius":"Enter Fahrenheit"

    toggleBtnMode.textContent =
    isCelsius? "Click here to convert from ℉ to ℃":"Click here to convert from ℃ to ℉ "

}