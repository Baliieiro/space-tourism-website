import React from "react";
import { Link } from "react-router-dom";

export default function ItemList({ url, text, number = "" }) {
  return (
    <li>
      <span>{number}</span>
      <Link className="nav-text" to={url}>
        {text}
      </Link>
    </li>
  );
}
