
var count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("btn p");
const decreaseBtn = document.getElementById("btn");
const resetBtn = document.getElementById("btn o");

function updateDisplay() {
    countDisplay.textContent = count;
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);

updateDisplay();