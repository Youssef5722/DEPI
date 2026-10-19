let is24Hour = true;

function updateClock() {
    const now = new Date();
    function updateClock() {
    const now = new Date();

    document.getElementById("clockPeriod").textContent =
        now.getHours() >= 12 ? "PM" : "AM";
}

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    let period = "";

    if (is24Hour) {
        hours = String(hours).padStart(2, "0");
    } else {
        period = hours >= 12 ? "PM" : "AM";
        hours = String(hours % 12 || 12).padStart(2, "0");
    }

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    document.getElementById("currentDate").textContent = date;
    document.getElementById("clockDate").textContent = date;

    const periodElement = document.getElementById("period");

    if (periodElement) {
        periodElement.textContent = period;
    }
}

const toggleButton = document.getElementById("toggleFormat");

toggleButton.addEventListener("click", function () {
    is24Hour = !is24Hour;

    toggleButton.textContent = is24Hour
        ? "Switch to 12-hour"
        : "Switch to 24-hour";

    updateClock();
});

updateClock();
setInterval(updateClock, 1000);

let count = 0;

const countValue = document.getElementById("countValue");
const totalCount = document.getElementById("totalCount");

document.getElementById("increaseBtn").addEventListener("click", function () {
    count++;
    updateCounter();
});

document.getElementById("decreaseBtn").addEventListener("click", function () {
    count--;
    updateCounter();
});

document.getElementById("resetBtn").addEventListener("click", function () {
    count = 0;
    updateCounter();
});

function updateCounter() {
    countValue.textContent = count;
    totalCount.textContent = count;
}