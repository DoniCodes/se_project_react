import "./Header.css";
import { currentDate } from "../../utils/constants.js";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link } from "react-router-dom";
function Header({ handleAddClick, weatherData }) {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="WTWR Logo" />
      </Link>
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
        <div className="header__profile">
          <Link to="/profile" className="header__link">
            <p className="header__username">Terrence Tegegne</p>
            <img src={avatar} alt="Profile Avatar" className="header__avatar" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
