import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="info">
        <h5 className="heading-5">SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className="heading-1">SPACE</h1>
        <p>
          Let&apos;s face it: if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <Link to="destination" className="btn">
        <button className="btn-main">EXPLORE</button>
      </Link>
    </section>
  );
}
