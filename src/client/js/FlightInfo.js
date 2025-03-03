export function FlightInfo(flight) {
  return `
      <div class="flight-info">
          <p><strong>Flight Details:</strong></p>
          <p>Flight Number: ${flight.number}</p>
          <p>Departure: ${flight.departureTime}</p>
          <p>Airline: ${flight.airline}</p>
      </div>
  `;
}
