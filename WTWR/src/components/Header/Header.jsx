import "./Header.css";
import { currentDate } from "../../utils/constants.js";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR Logo" />
      <p className="header__date-location">{currentDate}, LOCATION</p>
      <div className="header__user-container">
        <button className="header__add-clothes-btn">+ Add Clothes</button>
        <p className="header__username">Terrence Tegegne</p>
      </div>
      <img src={avatar} alt="" className="header__avatar" />
    </header>
  );
}

export default Header;
