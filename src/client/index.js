import { Header } from './components/Header.js';
import { TripCard } from './components/TripCard.js';
import { AddTripButton } from './components/AddTripButton.js';
import { WeatherInfo } from './components/WeatherInfo.js';
import { FlightInfo } from './components/FlightInfo.js';

// Sample Data
const tripData = {
    destination: "Paris, France",
    departureDate: "02/12/2025",
    daysAway: 220,
    image: "https://source.unsplash.com/600x400/?paris",
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
