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
    let interval = setInterval(timer, 1000);

    document.getElementById('rsvp-form').addEventListener('submit', function (e) {
        e.preventDefault();
        let formData = new FormData(document.getElementById('rsvp-form'));
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/api/rsvp');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert('Thanks!');
            } else {
                alert(xhr.responseText);
            }
        };
        xhr.send(JSON.stringify(object));
    });

    // Donations
    let stripe = Stripe('pk_live_51IN4zeEsMnHooy9laxk40JxfAoD02skA8fHzPCR3ej9XvRidoZiHUJfS6oz81AgfLF3yIuC7noAQeV486puGwuKV00gsgioeaz');
    let donate_button = document.getElementById('donate');

    donate_button.addEventListener('click', function() {
        // Create a new Checkout Session using the server-side endpoint you
        // created in step 3.
        fetch('/api/donate', {
            method: 'POST',
            body: JSON.stringify({ "amount": document.getElementById('amount').value })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (session) {
                return stripe.redirectToCheckout({sessionId: session.id});
            })
            .then(function (result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, you should display the localized error message to your
                // customer using `error.message`.
                if (result.error) {
                    alert(result.error.message);
                }
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    });
});
