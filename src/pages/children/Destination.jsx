import React from "react";
import { destinations } from "../../../data.json";
import "../../styles/Destination.scss";
import { useLocation } from "react-router-dom";

export default function Destination() {
  const { pathname } = useLocation();
  return (
    <div className="destination">
      <div className="subtitle">
        <span className="number">01</span>
        <h5>Pick your destination</h5>
      </div>
      <section>
        <img src={destinations[0].images.png} alt="" />
        <ul>
          <li className="nav-text active">{destinations[0].name}</li>
          <li className="nav-text">{destinations[0].name}</li>
          <li className="nav-text">{destinations[0].name}</li>
          <li className="nav-text">{destinations[0].name}</li>
        </ul>
        <h2 className="heading-2">{destinations[0].name}</h2>
        <p>{destinations[0].description}</p>
        <hr />
        <div className="travel">
          <span>
            <p className="subtitle-2">Avg. distance</p>
            <article className="subtitle-1">{destinations[0].distance}</article>
          </span>
          <span>
            <p className="subtitle-2">Est. travel time</p>
            <article className="subtitle-1">{destinations[0].travel}</article>
          </span>
        </div>
      </section>
    </div>
  );
}
