import { useState } from "react";
import { destinations } from "../../../data.json";
import "../../styles/Destination.scss";

export default function Destination() {
  const [planet, setPlanet] = useState(0);
  function handleClick(number) {
    setPlanet(number);
  }
  return (
    <div className="destination">
      <div className="subtitle">
        <span className="number">01</span>
        <h5>Pick your destination</h5>
      </div>
      <section>
        <img src={destinations[planet].images.png} alt="" />
        <ul>
          <li
            onClick={() => handleClick(0)}
            className={`nav-text ${planet === 0 ? "active" : ""}`}>
            Moon
          </li>
          <li
            onClick={() => handleClick(1)}
            className={`nav-text ${planet === 1 ? "active" : ""}`}>
            Mars
          </li>
          <li
            onClick={() => handleClick(2)}
            className={`nav-text ${planet === 2 ? "active" : ""}`}>
            Europa
          </li>
          <li
            onClick={() => handleClick(3)}
            className={`nav-text ${planet === 3 ? "active" : ""}`}>
            Titan
          </li>
        </ul>
        <h2 className="heading-2">{destinations[planet].name}</h2>
        <p>{destinations[planet].description}</p>
        <hr />
        <div className="travel">
          <span>
            <p className="subtitle-2">Avg. distance</p>
            <article className="subtitle-1">
              {destinations[planet].distance}
            </article>
          </span>
          <span>
            <p className="subtitle-2">Est. travel time</p>
            <article className="subtitle-1">
              {destinations[planet].travel}
            </article>
          </span>
        </div>
      </section>
    </div>
  );
}
