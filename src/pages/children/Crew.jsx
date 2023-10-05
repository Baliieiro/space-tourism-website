import React from "react";
import { crew } from "../../../data.json";
import "../../styles/Crew.scss";

export default function Crew() {
  console.log(crew);
  return (
    <div className="crew">
      <div className="subtitle">
        <span className="number">02</span>
        <h5>Meet your crew</h5>
      </div>
      <article>
        <img src={crew[0].images.png} alt="" srcset="" />
      </article>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="10"
        viewBox="0 0 88 10"
        fill="none">
        <circle opacity="0.174363" cx="5" cy="5" r="5" fill="white" />
        <circle cx="31" cy="5" r="5" fill="white" />
        <circle opacity="0.174363" cx="57" cy="5" r="5" fill="white" />
        <circle opacity="0.174363" cx="83" cy="5" r="5" fill="white" />
      </svg>
      <div className="comander">
        <h4 className="heading-4">{crew[0].role}</h4>
        <h3 className="heading-3">{crew[0].name}</h3>
        <p>{crew[0].bio}</p>
      </div>
    </div>
  );
}
