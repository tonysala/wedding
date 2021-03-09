require('./bootstrap');

document.addEventListener("DOMContentLoaded", function () {
    const finalDate = new Date("2022-07-22 00:00:00").getTime();

    const timer = () => {
        const now = new Date().getTime();
        let diff = finalDate - now;
        if (diff < 0) {
            clearInterval(interval);
        }

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(diff % (1000 * 60) / 1000);
        // Adding the zeros.
        days <= 99 ? days = `0${days}` : days;
        days <= 9 ? days = `00${days}` : days;
        hours <= 9 ? hours = `0${hours}` : hours;
        minutes <= 9 ? minutes = `0${minutes}` : minutes;
        seconds <= 9 ? seconds = `0${seconds}` : seconds;

        document.querySelector('#days').textContent = days;
        document.querySelector('#hours').textContent = hours;
        document.querySelector('#minutes').textContent = minutes;
        document.querySelector('#seconds').textContent = seconds;

    }
    // Calling the function every 1000 milliseconds.
    interval = setInterval(timer, 1000);

    document.getElementById('rsvp-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let formData = new FormData(document.getElementById('rsvp-form'));
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'api/rsvp');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert('Thanks!');
            }
        };
        xhr.send(formData);
    });
});
