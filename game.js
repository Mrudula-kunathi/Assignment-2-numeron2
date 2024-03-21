// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
// Generate two random numbers between 0 and 100
var num1 = Math.round(Math.random() * 100)
const number1box = document.getElementById("number1")
var num2 = Math.round(Math.random() * 100)
const number2box = document.getElementById("number2")

// Iteration 3: Creating variables required to make the game functional
var operator;
var score = 0;



// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
// Variable for number 3
var number3box = document.getElementById("number3")
var num3


// Iteration 5: Creating a randomise function to make the game functional
// Function to randomize game data
function randomise() {

    num1 = Math.round(Math.random() * 100)
    num2 = Math.round(Math.random() * 100)

    if (num1 < num2) {
        var extra = num1
        num1 = num2
        num2 = extra
    }

    operator = Math.round(Math.random() * 5)
    switch (operator) {
        case 1:
            num3 = num1 + num2;
            // number3box.innerHTML = number3
            break;

        case 2:
            num3 = num1 - num2;
            // number3box.innerHTML = number3
            break;

        case 3:
            num3 = num1 * num2;
            // number3box.innerHTML = number3
            break;

        case 4:
            num3 = Math.floor(num1 / num2)
            // number1 = number2 * number3
            break;

        case 5:
            number3 = num1 % num2;
            // number3box.innerHTML = number3
            break;

        case 0:
            randomise();
    }

    number1box.innerHTML = num1
    number2box.innerHTML = num2
    number3box.innerHTML = num3

    console.log(num1 + " " + num2 + " " + num3 + " " + operator);
}

randomise();
  

// Iteration 6: Making the Operators (button) functional
// Event listeners for operator buttons
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")

plus.onclick = () => {
    if ((num1 + num2) === num3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

minus.onclick = () => {
    if ((num1 - num2) === num3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

mul.onclick = () => {
    if ((num1 * num2) === num3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

divide.onclick = () => {
    if ((Math.floor(num1 / num2)) === num3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

modulus.onclick = () => {
    if ((num1 % num2) === num3) {
        score++
        randomise();
        resetTime(timerId)
    } else {
        location.href = "gameover.html?score=" + score
    }
}

// Iteration 7: Making Timer functional
// Variable to store the timer interval ID
var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();