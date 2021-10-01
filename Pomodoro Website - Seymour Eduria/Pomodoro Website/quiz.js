// Pomodoro Quiz by Seymour Eduria

// HTML Elements as Variables
let sButtonEl = document.getElementById("submitBtn")
let rButtonEl = document.getElementById("resetBtn")
let numAnsEl = document.getElementById("numAns")
    // Inputted Values added with .toLowerCase in order for the quiz to be incasensitive
let q1El = document.getElementById("qOne").value.toLowerCase();
let q2El = document.getElementById("qTwo").value.toLowerCase();
let q3El = document.getElementById("qThree").value.toLowerCase();
let q4El = document.getElementById("qFour").value.toLowerCase();
let q5El = document.getElementById("qFive").value.toLowerCase();

let out1El = document.getElementById("outOne");
let out2El = document.getElementById("outTwo");
let out3El = document.getElementById("outThree");
let out4El = document.getElementById("outFour");
let out5El = document.getElementById("outFive");

// Global Variables
let q1Ans = 0;
let q2Ans = 0;
let q3Ans = 0;
let q4Ans = 0;
let q5Ans = 0;

// Event Listener - Once the button is clicked then the computer will run the function
sButtonEl.addEventListener("click", submitAns)
rButtonEl.addEventListener("click", reloadpage)


// Event Function
function submitAns() {

    // Input: Get Answers From the user first

    // Process: check to see if the answer is correct or not

    // If the answer is correct then the computer runs the program that changes the Border width, color, and style into solid green; also adds the word 'Correct' beside the input element. It also increases the value of the variable q#Ans by 1. 

    // If the answer is wrong then the computer runs the else command that changes the Border width, color, and style into solid red; also adds the word 'Wrong' beside the input element.

    // Some of the if statements are chained Boolean expressions and take 2 more possibilities for a correct answer


    if (q1El === "francesco cirillo") {
        q1Ans++;
        document.getElementById("qOne").style.borderWidth = "5px"
        document.getElementById("qOne").style.borderStyle = "solid"
        document.getElementById("qOne").style.borderColor = "#89c937"
        out1El.innerHTML = " Correct"
    } else {
        document.getElementById("qOne").style.borderWidth = "5px"
        document.getElementById("qOne").style.borderStyle = "solid"
        document.getElementById("qOne").style.borderColor = "#f52626"
        out1El.innerHTML = " Wrong"
    } 
    
    if (q2El === "30 minutes") {
        q2Ans++;
        document.getElementById("qTwo").style.borderWidth = "5px"
        document.getElementById("qTwo").style.borderStyle = "solid"
        document.getElementById("qTwo").style.borderColor = "#89c937"
        out2El.innerHTML = " Correct"
    } else if (q2El === "30 min") {
        q2Ans++;
        document.getElementById("qTwo").style.borderWidth = "5px"
        document.getElementById("qTwo").style.borderStyle = "solid"
        document.getElementById("qTwo").style.borderColor = "#89c937"
        out2El.innerHTML = " Correct"
    } else {
        document.getElementById("qTwo").style.borderWidth = "5px"
        document.getElementById("qTwo").style.borderStyle = "solid"
        document.getElementById("qTwo").style.borderColor = "#f52626"
        out2El.innerHTML = " Wrong"
    } 
    
    if (q3El === "25 minutes") {
        q3Ans++
        document.getElementById("qThree").style.borderWidth = "5px"
        document.getElementById("qThree").style.borderStyle = "solid"
        document.getElementById("qThree").style.borderColor = "#89c937"
        out3El.innerHTML = " Correct"
    } else if (q3El === "25 min"){
        q3Ans++
        document.getElementById("qThree").style.borderWidth = "5px"
        document.getElementById("qThree").style.borderStyle = "solid"
        document.getElementById("qThree").style.borderColor = "#89c937"
        out3El.innerHTML = " Correct"
    
    } else {
        document.getElementById("qThree").style.borderWidth = "5px"
        document.getElementById("qThree").style.borderStyle = "solid"
        document.getElementById("qThree").style.borderColor = "#f52626"
        out3El.innerHTML = " Wrong"
    } 
    
    if (q4El === "procrastination") {
        q4Ans++;
        document.getElementById("qFour").style.borderWidth = "5px"
        document.getElementById("qFour").style.borderStyle = "solid"
        document.getElementById("qFour").style.borderColor = "#89c937"
        out4El.innerHTML = " Correct"
    } else {
        document.getElementById("qFour").style.borderWidth = "5px"
        document.getElementById("qFour").style.borderStyle = "solid"
        document.getElementById("qFour").style.borderColor = "#f52626"
        out4El.innerHTML = " Wrong"
    } 
    
    if (q5El === "italy") {
        q5Ans++;
        document.getElementById("qFive").style.borderWidth = "5px"
        document.getElementById("qFive").style.borderStyle = "solid"
        document.getElementById("qFive").style.borderColor = "#89c937"
        out5El.innerHTML = " Correct"
    } else if (q5El === "spaghetti land") {
        q5Ans++;
        document.getElementById("qFive").style.borderWidth = "5px"
        document.getElementById("qFive").style.borderStyle = "solid"
        document.getElementById("qFive").style.borderColor = "#89c937"
        out5El.innerHTML = " Correct"
    } else {
        document.getElementById("qFive").style.borderWidth = "5px"
        document.getElementById("qFive").style.borderStyle = "solid"
        document.getElementById("qFive").style.borderColor = "#f52626"
        out5El.innerHTML = " Wrong"
    }

    // Output: The Result of the quiz with the fraction form of the mark + the % form
    
    // numAns adds the values of all the variables based on the answer 
    // Then overwrites the HTML element of the span ID and replaces it with the value of numAns / 5 = % (numAns/5 * 100)
    let numAns = (q1Ans + q2Ans + q3Ans + q4Ans + q5Ans) 
    numAnsEl.innerHTML = numAns + "/5" + " = " + numAns/5 * 100 + "%"

}

// Button Function for the reset button = refreshes the page
function reloadpage () {
    location.reload()
}