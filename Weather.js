const fetchWeatherAsync = async () => {
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        displayWeather(data, "Async/Await Version");

    } catch (error) {
        showError(error.message);
    }
};
const latitude = 16.5062;  
const longitude = 80.6480;

const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

// Promise-based version
const fetchWeatherWithPromises = () => {
    fetch(apiURL)
        .then(response => {
            if (!response.ok) throw new Error("Network response failed");
            return response.json();
        })
        .then(data => {
            displayWeather(data, "Promise Version");
        })
        .catch(error => {
            showError(error.message);
        });
};
const displayWeather = (data, version) => {
    const weather = data.current_weather;

    const report = `
        <h3>${version}</h3>
         Temperature: ${weather.temperature}°C <br>
         Wind Speed: ${weather.windspeed} km/h <br>
         Wind Direction: ${weather.winddirection}° <br>
         Time: ${weather.time}
    `;

    document.getElementById("output").innerHTML = report;
};
const showError = (msg) => {
    document.getElementById("output").innerHTML =
        `Error: ${msg}`;
};
// fetchWeatherWithPromises();
fetchWeatherAsync();