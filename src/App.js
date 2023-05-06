import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";
import sunny from './assets/sunny.svg'
import night from './assets/night.svg'
import day from './assets/day.svg'
import cloudy from './assets/cloudy.svg'
import cloudynight from './assets/cloudy-night.svg'
import perfectday from './assets/perfect-day.svg'
import rain from './assets/rain.svg'
import rainnight from './assets/rain-night.svg'
import strom from './assets/storm.svg'

export const WeatherIcons = {
  "01d": `${sunny}`,
  "01n":  `${night}`,
  "02d":  `${day}`,
  "02n":  `${cloudynight}`,
  "03d":  `${cloudy}`,
  "03n":  `${cloudy}`,
  "04d":  `${perfectday}`,
  "04n": `${cloudynight}`,
  "09d":  `${rain}`,
  "09n":  `${rainnight}`,
  "10d":  `${rain}`,
  "10n":  `${strom}`,
  "11d": `${strom}`,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
    {city && weather ? (
      <button onClick={() => window.location.reload(true)}>&times;</button>
      ):(<span></span>)}

      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      
    </Container>
  );
}


export default App;
