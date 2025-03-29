import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    <div className="toggle__switch">
      <input type="checkbox" className="toggle__switch_checkbox" />
      <span className="toggle__switch_slider"></span>
    </div>
  );
}

export default ToggleSwitch;
