import { Header } from './js/Header.js';
import { TripCard } from './js/TripCard.js';
import { AddTripButton } from './js/AddTripButton.js';
import { WeatherInfo } from './js/WeatherInfo.js';
import { FlightInfo } from './js/FlightInfo.js';

// Sample Data
const tripData = {
    destination: "Paris, France",
    departureDate: "02/12/2025",
    daysAway: 220,
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    weather: { high: 46, low: 35, description: "Mostly cloudy" },
    flight: { number: "ORD 300PM", departureTime: "3:00 PM", airline: "UDCITY AIR" }
};

// Render Components
document.getElementById('app').innerHTML = `
    ${Header()}
    <main>
        ${AddTripButton()}
        ${TripCard(tripData)}
        ${WeatherInfo(tripData.weather)}
        ${FlightInfo(tripData.flight)}
    </main>
`;

// ✅ Step 3: Add Event Listener After Rendering
document.addEventListener("DOMContentLoaded", () => {
    const addTripBtn = document.getElementById("addTripBtn");

    if (addTripBtn) {
        addTripBtn.addEventListener("click", () => {
            alert("Add Trip button clicked!");
        });
    } else {
        console.error("Button not found in the DOM.");
    }
});
