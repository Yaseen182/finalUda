export function TripCard(trip) {
    return `
        <div class="trip-card">
            <img src="${trip.image}" alt="Trip to ${trip.destination}" />
            <div class="trip-info">
                <h2>My trip to: ${trip.destination}</h2>
                <p><strong>Departing:</strong> ${trip.departureDate}</p>
                <p>${trip.daysAway} days away</p>
                <button class="save-trip">Save Trip</button>
                <button class="remove-trip">Remove Trip</button>
            </div>
        </div>
    `;
}
