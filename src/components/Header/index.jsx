import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.scss";
import ItemList from "../ItemList";

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  return (
    <header>
      <Link to="/" className="logo"></Link>
      <nav className={navActive ? "navbar-open" : "navbar-close"}>
        <i
          className="menu"
          onClick={(current) => setNavActive((current) => !current)}></i>
        <ul>
          <ItemList number={"00"} url={"/"} text={"home"} />
          <ItemList number={"01"} url={"/destination"} text={"destination"} />
          <ItemList number={"02"} url={"/crew"} text={"crew"} />
          <ItemList number={"03"} url={"/technology"} text={"technology"} />
        </ul>
      </nav>
    </header>
  );
}
