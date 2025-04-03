import "./Header.css";
import { currentDate } from "../../utils/constants.js";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
function Header({ handleAddClick, weatherData }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR Logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>{" "}
      <div className="header__user-container">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add Clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
      </div>
      <img src={avatar} alt="Profile Avatar" className="header__avatar" />
    </header>
  );
}

export default Header;
