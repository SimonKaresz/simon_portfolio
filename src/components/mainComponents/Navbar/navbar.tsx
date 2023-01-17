import { useState } from "react";
import { useToggle } from "../../otherComponents/toggle/toggle";
import {
  CV,
  CVData,
  DividingLine,
  HeaderNavItems,
  HeaderOther,
  SocialLinks,
} from "./navbarIndex";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const { state: isVisible, toggle } = useToggle();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <header
        className={
          !navbar ? "header_appearance lg:bg-transparent" : "header_appearance"
        }
      >
        <HeaderOther event={toggle} />
        <div
          className={
            !isVisible
              ? "hidden flex-col items-center justify-center lg:flex lg:flex-row"
              : "mt-8 flex flex-col items-center justify-center lg:mt-0 lg:flex-row"
          }
        >
          <HeaderNavItems event={toggle} />
        </div>
        <DividingLine visible={isVisible} />
        <div
          className={
            !isVisible
              ? "flex max-lg:hidden max-lg:border-t-2"
              : "flex max-lg:flex"
          }
        >
          <SocialLinks />
          <div className="navbar-social flex items-center justify-center">
            <CV href={CVData.href} text={CVData.text} />
          </div>
        </div>
      </header>
    </>
  );
};
