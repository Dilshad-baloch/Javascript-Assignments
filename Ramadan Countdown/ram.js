function updateCountdown() {
    var ramadanStartDate = new Date("2025-03-10T00:00:00"); 
    var currentDate = new Date();
    var timeDifference = ramadanStartDate - currentDate;

    if (timeDifference < 0) {
        document.querySelector(".countdown-message").innerText = "Ramadan Mubarak!";
        clearInterval(countdownInterval);
        return;
    }

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

updateCountdown();
var countdownInterval = setInterval(updateCountdown, 1000);
