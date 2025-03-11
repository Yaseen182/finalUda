export const TripCard = (data) => {
    return `
        <div class="trip-card">
            <h2>${data.destination}</h2>
            <img src="${data.image}" alt="Trip image" />
            <div class="trip-info">
                <p><strong>Departure Date:</strong> ${data.departureDate}</p>
                <p><strong>Days Away:</strong> ${data.daysAway}</p>
                <div class="weather-info">
                    <p><strong>Weather:</strong> ${data.weather.description}</p>
                    <p><strong>High:</strong> ${data.weather.high}°C</p>
                    <p><strong>Low:</strong> ${data.weather.low}°C</p>
                </div>
                <div class="flight-info">
                    <p><strong>Flight:</strong> ${data.flight.number}</p>
                    <p><strong>Departure:</strong> ${data.flight.departureTime}</p>
                    <p><strong>Airline:</strong> ${data.flight.airline}</p>
                </div>
            </div>
        </div>
    `;
};
