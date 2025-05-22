// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded");

    // Animate image when it scrolls into view
    const image = document.querySelector('.about-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    if (image) {
        observer.observe(image);
    }

    // 🌤️ Live Weather for Kovalam, Kerala
    const apiKey = "e123a51ccd567fbe0f0577bfd53b386f";
    const city = "Kovalam,IN";

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Kovalam,IN&appid=YOUR_API_KEY&units=metric")

        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            const weatherElement = document.getElementById("live-weather");
            if (weatherElement) {
                weatherElement.innerHTML = `🌤️ ${temp}°C, ${desc}`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            const weatherElement = document.getElementById("live-weather");
            if (weatherElement) {
                weatherElement.innerHTML = "Weather info not available";
            }
        });
});
