import React, { useState } from 'react'
import Dark from "../assets/moon.png";
import Light from "../assets/sun.svg";

function Theme() {
    const [themeImg, setThemeimg] = useState("dark");
    const themeMode = () => {
      const Htmlelement = document.querySelector("html");
      Htmlelement.classList.toggle("dark");
      if (Htmlelement.className === "dark") {
        setThemeimg("dark");
      } else {
        setThemeimg("light");
      }
    };
  return (
    <div className="theme  " onClick={themeMode}>
        {themeImg === "dark" ? (
          <img className="w-6 h-6 object-contain" src={Dark} alt="dark_image" />
        ) : (
          <img className="w-6 h-6 object-contain" src={Light} alt="light icon" />
        )}
      </div>
  )
}

export default Theme