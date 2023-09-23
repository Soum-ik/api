import { BsSearch } from "react-icons/bs";
import { GiAirZigzag } from "react-icons/gi";
import { IoIosFlower } from "react-icons/io";
import "../weather/weather.css";

import React, { useRef } from "react";

const img =
  "https://images.unsplash.com/photo-1601370552761-d129028bd833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80";

export default function Weater() {
  let api = import.meta.VITE_REACT_WEATHER_API;

  const ref = useRef();
  //   console.log(ref.current.value);
  const search = async () => {
    const result = ref.current.value.trim();
    if (result === "") {
      console.log("Search input is empty");
    } else {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${result}&units=Metric&appid=1c1b48b62b670bfa51fc08f06b79d5ad
    `;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    }
  };

  const handleFocus = () => {
    ref.current.focus();
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input ref={ref} type="search" onChange={() =>{search()}} name="" id="" />
        <div className="icon-bar">
          <BsSearch className="" onClick={handleFocus} />
        </div>
      </div>
      <div className="weather-img">
        <img src={img} alt="" />
      </div>
      <div className="weather-tem">24</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <IoIosFlower className="element-icon" />
          <div className="data">
            <div className="huminity-parcentage">64%</div>
            <div className="huminity">humity</div>
          </div>
        </div>
        <div className="element">
          <GiAirZigzag className="element-icon" />

          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="wind">wing speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
