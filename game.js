// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1 = Math.floor(Math.random() * 101); // 0 to 100 inclusive
const number1box = document.getElementById("number1");
number1box.innerHTML = num1;

var num2 = Math.floor(Math.random() * 101); // 0 to 100 inclusive
const number2box = document.getElementById("number2");
number2box.innerHTML = num2;

  
  // Iteration 3: Creating variables required to make the game functional
var operator;
var score = 0;
  // Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num3;
const number3box = document.getElementById("number3");

  
  // Iteration 5: Creating a randomise function to make the game functional
  function randomise() {
    num1 = Math.floor(Math.random() * 101); // 0 to 100 inclusive
    num2 = Math.floor(Math.random() * 101); // 0 to 100 inclusive

    // Ensure num1 is greater than or equal to num2
    if (num1 < num2) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }

    operator = Math.floor(Math.random() * 5) + 1; // 1 to 5 inclusive
    switch (operator) {
        case 1:
            num3 = num1 + num2;
            break;
        case 2:
            num3 = num1 - num2;
            break;
        case 3:
            num3 = num1 * num2;
            break;
        case 4:
            num3 = Math.floor(num1 / num2);
            break;
        case 5:
            num3 = num1 % num2;
            break;
    }

    number1box.innerHTML = num1;
    number2box.innerHTML = num2;
    number3box.innerHTML = num3;

    console.log(num1 + " " + num2 + " " + num3 + " " + operator);
}

randomise();

  
  // Iteration 6: Making the Operators (button) functional
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mul = document.getElementById("mul");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");

plus.onclick = () => checkAnswer(num1 + num2);
minus.onclick = () => checkAnswer(num1 - num2);
mul.onclick = () => checkAnswer(num1 * num2);
divide.onclick = () => checkAnswer(Math.floor(num1 / num2));
modulus.onclick = () => checkAnswer(num1 % num2);

function checkAnswer(answer) {
    if (answer === num3) {
        score++;
        randomise();
        resetTime(timerId);
    } else {
        location.href = "gameover.html?score=" + score;
    }
};
  // Iteration 7: Making Timer functional
  var time = 20;
  var timerId;
  const timer = document.getElementById("timer");
  
  function startTimer() {
      time = 20;
      timer.innerHTML = time;
      timerId = setInterval(() => {
          time--;
          if (time == 0) {
              clearInterval(timerId);
              location.href = "./gameover.html?score=" + score;
          }
          timer.innerHTML = time;
      }, 1000);
  }
  
  function resetTime(intervalId) {
      clearInterval(intervalId);
      startTimer();
  }
  
  startTimer();
  