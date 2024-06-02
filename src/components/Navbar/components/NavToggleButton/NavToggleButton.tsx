import * as S from "./NavToggleButton.style";

interface NavToggleButtonProps {
  isToggle: boolean;
  onToggle: () => void;
}

const NavToggleButton = ({ isToggle, onToggle }: NavToggleButtonProps) => {
  return (
    <S.HamburgerMenu
      className="nav_toggle_box"
      onClick={onToggle}
    >
      <S.HamburgerLineOne
        animate={{
          rotate: isToggle ? 45 : 0,
          translateY: isToggle ? "12px" : 0,
        }}
      />

      <S.HamburgerLineTwo
        animate={{
          opacity: isToggle ? 0 : 1,
        }}
      />

      <S.HamburgerLineThree
        animate={{
          rotate: isToggle ? -45 : 0,
          translateY: isToggle ? "-12px" : 0,
        }}
      />
    </S.HamburgerMenu>
  );
};

export default NavToggleButton;
