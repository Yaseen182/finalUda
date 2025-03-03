export function WeatherInfo(weather) {
    return `
        <div class="weather-info">
            <p><strong>Weather Forecast:</strong></p>
            <p>High: ${weather.high}°C, Low: ${weather.low}°C</p>
            <p>${weather.description}</p>
        </div>
    `;
}
