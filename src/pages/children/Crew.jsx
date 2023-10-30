import React, { useState } from "react";
import { crew } from "../../../data.json";
import "../../styles/Crew.scss";

export default function Crew() {
  const [planet, setPlanet] = useState(0);
  function handleClick(number) {
    setPlanet(number);
  }
  return (
    <div className="crew">
      <div className="subtitle">
        <span className="number">02</span>
        <h5>Meet your crew</h5>
      </div>
      <article>
        <img src={crew[planet].images.png} alt="" />
      </article>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="10"
        viewBox="0 0 88 10"
        fill="none">
        <circle
          onClick={() => handleClick(0)}
          opacity="0.174363"
          className={`${planet === 0 ? "active" : ""}`}
          cx="5"
          cy="5"
          r="5"
          fill="white"
        />
        <circle
          onClick={() => handleClick(1)}
          opacity="0.174363"
          className={`${planet === 1 ? "active" : ""}`}
          cx="31"
          cy="5"
          r="5"
          fill="white"
        />
        <circle
          onClick={() => handleClick(2)}
          opacity="0.174363"
          className={`${planet === 2 ? "active" : ""}`}
          cx="57"
          cy="5"
          r="5"
          fill="white"
        />
        <circle
          onClick={() => handleClick(3)}
          opacity="0.174363"
          className={`${planet === 3 ? "active" : ""}`}
          cx="83"
          cy="5"
          r="5"
          fill="white"
        />
      </svg>
      <div className="comander">
        <h4 className="heading-4">{crew[planet].role}</h4>
        <h3 className="heading-3">{crew[planet].name}</h3>
        <p>{crew[planet].bio}</p>
      </div>
    </div>
  );
}
