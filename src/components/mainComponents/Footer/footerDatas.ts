import { FaFacebookF, FaLinkedinIn,FaFacebookMessenger, FaGithub, } from "react-icons/fa";
import { Links } from "../../otherComponents/links/links";

export const FooterNavData = [
    {
      href: "#home",
      text: "Home",
      className:"mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90",
    },
    {
      href: "#aboutme",
      text: "AboutMe",
      className:"mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90",
    },
    {
      href: "#skills",
      text: "Skills",
      className:"mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90",
    },
    {
      href: "#project",
      text: "Project",
      className:"mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90",
    },
    {
      href: "#connect",
      text: "Connect",
      className:"mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90",
    },
  ];

  export const FooterSocialLinkData = [
    {
      icon: FaFacebookF,
      link: Links.facebook_link,
      target:"blank",
      className:"mx-2",
      platformName:"Facebook",
    },
    {
      icon: FaLinkedinIn,
      link: Links.linkedin_link,
      target:"blank",
      className:"mx-2",
      platformName:"Linkedin",
    },
    {
      icon: FaGithub,
      link: Links.github_link,
      target:"blank",
      className:"mx-2",
      platformName:"Github",
    },
    {
      icon: FaFacebookMessenger,
      link: Links.messenger_link,
      target:"blank",
      className:"mx-2",
      platformName:"Messenger",
    },
  ];