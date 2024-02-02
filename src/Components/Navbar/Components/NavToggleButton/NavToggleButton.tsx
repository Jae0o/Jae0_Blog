import "./NavToggleButton.Styles.css";

interface NavToggleButtonProps {
  isToggle: boolean;
  onToggle: () => void;
}

const NavToggleButton = ({ isToggle, onToggle }: NavToggleButtonProps) => {
  return (
    <div className="navbar_dropdown-button">
      <label className="navbar_dropdown_checkbox">
        <input
          id="toggle_checkbox"
          className="navbar_dropdown_checkbox_input"
          type="checkbox"
          checked={isToggle}
          onClick={onToggle}
          readOnly
        />
      </label>
    </div>
  );
};

export default NavToggleButton;
