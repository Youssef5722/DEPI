const timeElement = document.getElementById("time");
const toggleButton = document.getElementById("toggleFormat");
const dateElements = document.querySelectorAll(".current-date");
const periodElements = document.querySelectorAll(".time-period");

let is24Hour = true;

function updateDate(now) {
    const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    dateElements.forEach(function (element) {
        element.textContent = date;
    });
}

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const period = hours >= 12 ? "PM" : "AM";

    if (!is24Hour) {
        hours = hours % 12;
        if (hours === 0) {
            hours = 12;
        }
    }

    const formattedHours = String(hours).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    timeElement.textContent = `${formattedHours}:${minutes}:${seconds}`;
    updateDate(now);

    periodElements.forEach(function (element) {
        element.textContent = period;
    });
}

function toggleTimeFormat() {
    is24Hour = !is24Hour;
    toggleButton.textContent = is24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
    toggleButton.setAttribute("aria-pressed", String(!is24Hour));
    updateTime();
}

toggleButton.addEventListener("click", toggleTimeFormat);

updateTime();
setInterval(updateTime, 1000);