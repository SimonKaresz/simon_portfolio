import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { useToggle } from "../otherComponents/toggle/toggle";
import { Links } from "../otherComponents/links/links";

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
          !navbar
            ? "fixed w-full top-0 left-0 right-0 py-8 select-none max-lg:bg-black/[.8] bg-transparent z-50 flex justify-around items-center text-white max-lg:flex-col"
            : "fixed top-0 w-full left-0 right-0 py-8 select-none bg-black/[.8] z-50 flex justify-around items-center text-white max-lg:flex-col"
        }
      >
        <div className="mx-12 text-2xl text-white font-bold flex justify-between items-center w-11/12 max-lg:w-full max-lg:justify-between">
          <p className="max-lg:ml-2">Simon Porfolio</p>
          <FiMenu
            onClick={toggle}
            className="text-3xl max-lg:mr-2 lg:hidden cursor-pointer hover:text-orange-300 active:text-orange-300"
          />
        </div>
        <div
          className={
            !isVisible
              ? "flex items-center justify-center max-lg:hidden max-lg:flex-col"
              : "flex items-center justify-center max-lg:flex max-lg:flex-col max-lg:mt-8"
          }
        >
          <nav>
            <a onClick={toggle} href="#home">
              Home
            </a>
          </nav>
          <nav>
            <a onClick={toggle} href="#aboutme">
              About Me
            </a>
          </nav>
          <nav>
            <a onClick={toggle} href="#skills">
              Skills
            </a>
          </nav>
          <nav>
            <a onClick={toggle} href="#project">
              Project
            </a>
          </nav>
          <nav>
            <a onClick={toggle} href="#connect">
              Connect
            </a>
          </nav>
        </div>
        <div
          className={
            isVisible ? "max-lg:w-full max-lg:border-[1px] max-lg:my-5" : ""
          }
        ></div>
        <div
          className={
            !isVisible
              ? "flex max-lg:hidden max-lg:border-t-2"
              : "flex max-lg:flex"
          }
        >
          <a href={Links.facebook_link} target="blank">
            <FaFacebookF className="navbar-social" />
          </a>
          <a href={Links.linkedin_link} target="blank">
            <FaLinkedinIn className="navbar-social" />
          </a>
          <a href={Links.github_link} target="blank">
            <FiGithub className="navbar-social" />
          </a>
          <div className="navbar-social flex justify-center items-center">
            <a
              href="https://drive.google.com/file/d/1VQ6VbeVHZh5TeNV0rKnXnB_sXhgPn0UD/view?usp=sharing"
              target="blank"
            >
              CV
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
