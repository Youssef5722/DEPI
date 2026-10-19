
var count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

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