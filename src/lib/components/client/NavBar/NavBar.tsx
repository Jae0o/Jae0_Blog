import { twMerge } from "tailwind-merge";

const NavBar = () => {
  return (
    <nav
      className={twMerge(
        "w-full h-[6rem] absolute left-0 right-0 bottom-0 animate-nav_out",
        "tablet:translate-y-[6rem] tablet:animate-nav_in",
        "bg-green-500 border-[1rem] border-pink-400",
      )}
    >
      NavBar
    </nav>
  );
};

export default NavBar;
