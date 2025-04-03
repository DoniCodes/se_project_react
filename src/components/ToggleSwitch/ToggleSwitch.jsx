import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circle"></span>
      <span
        style={{ color: `${currentTemperatureUnit === "F" ? "#fff" : ""}` }}
        className="toggle-switch__text toggle-switch__text-F"
      >
        F
      </span>
      <span
        style={{ color: `${currentTemperatureUnit === "C" ? "#fff" : ""}` }}
        className="toggle-switch__text toggle-switch__text-C"
      >
        C
      </span>
    </label>
  );
}

export default ToggleSwitch;
