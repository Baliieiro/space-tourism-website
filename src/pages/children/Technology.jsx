import React, { useState } from "react";
import "../../styles/Technology.scss";
import { technology } from "../../../data.json";

export default function Technology() {
  const [planet, setPlanet] = useState(0);
  function handleClick(number) {
    setPlanet(number);
  }
  return (
    <div className="technology">
      <div className="subtitle">
        <span>03</span>
        <h5>SPACE LAUNCH 101</h5>
      </div>
      <img src={technology[planet].images.landscape} alt="" />
      <ul className="bnt-technology">
        <li
          onClick={() => handleClick(0)}
          className={`${planet === 0 ? "active" : ""}`}>
          1
        </li>
        <li
          onClick={() => handleClick(1)}
          className={`${planet === 1 ? "active" : ""}`}>
          2
        </li>
        <li
          onClick={() => handleClick(2)}
          className={`${planet === 2 ? "active" : ""}`}>
          3
        </li>
      </ul>
      <div className="the-terminology">
        <h6 className="nav-text">THE TERMINOLOGY…</h6>
        <h3 className="heading-3">{technology[planet].name}</h3>
        <p>{technology[planet].description}</p>
      </div>
    </div>
  );
}
