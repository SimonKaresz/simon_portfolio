import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { Links } from "../../otherComponents/links/links";


export const NavItemData = [
    {
      href: "#home",
      text: "Home",
    },
    {
      href: "#aboutme",
      text: "AboutMe",
    },
    {
      href: "#skills",
      text: "Skills",
    },
    {
      href: "#project",
      text: "Project",
    },
    {
      href: "#connect",
      text: "Connect",
    },
  ];
  
  export const SocialLinkData = [
    {
      icon: FaFacebookF,
      link: Links.facebook_link,
    },
    {
      icon: FaLinkedinIn,
      link: Links.linkedin_link,
    },
    {
      icon: FiGithub,
      link: Links.github_link,
    },
  ];
  
  export const CVData = {
    href: "https://drive.google.com/file/d/18LW-ROt9dy42xAtUo9EklMTP_noHNIfV/view?usp=sharing",
    text: "CV",
  };