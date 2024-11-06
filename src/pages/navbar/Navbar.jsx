import { NavLink } from "react-router-dom";
import logo from "./Logo.jpg";
import "./Navbar.css";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    document.body.appendChild(addScript);

    window.loadGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_element"
      );
    };
  }, []);
  return (
    <div className="navbar" id="fixedd">
      <div id="google_element"> </div>

      <div className="leftSide">
        <img src={logo} alt="logo" />
      </div>
      <div className="rightSide">
        <ul className="navContainer">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/state_ut">
            <li>State & UT</li>
          </NavLink>
          <NavLink to="/festivals">
            <li>Festivals</li>
          </NavLink>
          <NavLink to="/heritage_site">
            <li>Heritage Sites</li>
          </NavLink>
          <NavLink to="/travel_with_us">
            <li>Travel With Us</li>
          </NavLink>
          <NavLink to="/gallery">
            <li>Gallery</li>
          </NavLink>
          <NavLink to="/blog">
            <li>Blog</li>
          </NavLink>
          <NavLink to="/contact_us">
            <li>Contact Us</li>
          </NavLink>
        </ul>
        <div className="searchContainer flex">
          <div className="searchBar flex">
            <input type="text" placeholder="Search here" />
            <i className="fa-solid fa-microphone"></i>
          </div>
          <i className="fa-solid fa-magnifying-glass" id="searchBtn"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
