window.addEventListener("DOMContentLoaded", function(){
    const inputField = document.getElementById("inputField");
    const checkBtn = document.getElementById("checkBtn");
    const showResultHere = document.getElementById("showResultHere");

    checkBtn.addEventListener("click", function(){
        userEnters = parseInt(inputField.value);
        validation(userEnters);
        // console.log("Hello check hello")
    })
    function validation(userEnters){
        if(userEnters === ""){
            alert("enter something!")
        }
        else if(isNaN(userEnters)){
            alert("Please only enter numbers")
        } 
        else if(userEnters <= 1){
            alert("enter numbers greater than 1")
        } else{
            checkTheCondition(userEnters);
        }
        
    }
    function checkTheCondition(userEnters){
        if(userEnters%s2 == 0){
            showResultHere.textContent = `${userEnters},is even number.`
            showResultHere.style.color = "Green"
        } else{
            showResultHere.textContent = `${userEnters}, is odd number`
            showResultHere.style.color = "red"
        }
    }
});