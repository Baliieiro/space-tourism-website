// Layout.js
import React from "react";
import { useLocation } from "react-router-dom";

function DinamicLayout({ children }) {
  const location = useLocation();
  const backgroundImage = getImageForRoute(location.pathname);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh",
    padding: "1.5rem",
    paddingBottom: "3.5rem",
  };

  return <div style={containerStyle}>{children}</div>;
}

function getImageForRoute(pathname) {
  const images = {
    "/": {
      small: "src/assets/home/background-home-mobile.jpg",
      medium: "src/assets/home/background-home-tablet.jpg",
      large: "src/assets/home/background-home-desktop.jpg",
    },
    "/destination": {
      small: "src/assets/destination/background-destination-mobile.jpg",
      medium: "src/assets/destination/background-destination-tablet.jpg",
      large: "src/assets/destination/background-destination-desktop.jpg",
    },
    "/crew": {
      small: "src/assets/crew/background-crew-mobile.jpg",
      medium: "src/assets/crew/background-crew-tablet.jpg",
      large: "src/assets/crew/background-crew-desktop.jpg",
    },
    "/technology": {
      small: "src/assets/technology/background-technology-mobile.jpg",
      medium: "src/assets/technology/background-technology-tablet.jpg",
      large: "src/assets/technology/background-technology-desktop.jpg",
    },
  };

  const screenWidth = window.innerWidth;

  if (screenWidth <= 767) {
    return images[pathname].small;
  } else if (screenWidth <= 1043) {
    return images[pathname].medium;
  } else {
    return images[pathname].large;
  }
}

export default DinamicLayout;
