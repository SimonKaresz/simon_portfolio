import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Links } from "../otherComponents/links/links";

export const Footer = () => {
  return (
    <footer className="text-white w-full py-64 flex flex-col justify-center items-center bg-gradient-to-b from-black select-none">
      <div className="flex w-full justify-around items-center max-md:flex-col-reverse">
        <div>
          <h1>© Simon Károly 2022</h1>
        </div>
        <div className="flex justify-center items-center text-center max-md:my-12 max-md:text-md max-[380px]:flex-col">
          <a
            className="mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90"
            href="#home"
          >
            Home
          </a>
          <a
            className="mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90"
            href="#aboutme"
          >
            About Me
          </a>
          <a
            className="mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90"
            href="#project"
          >
            Project
          </a>
          <a
            className="mx-2 text-lg font-semibold hover:text-cyan-300/90 active:text-cyan-300/90"
            href="#connect"
          >
            Connect
          </a>
        </div>
        <div className="flex flex-col justify-center items-start">
          <div className="flex items-center justify-center my-1">
            <FaFacebookSquare />
            <a href={Links.facebook_link} target="blank" className="mx-2">
              Facebook
            </a>
          </div>
          <div className="flex items-center justify-center my-1">
            <FaLinkedin />
            <a href={Links.linkedin_link} target="blank" className="mx-2">
              Linkedin
            </a>
          </div>
          <div className="flex items-center justify-center my-1">
            <FaGithubSquare />
            <a href={Links.github_link} target="blank" className="mx-2">
              GitHub
            </a>
          </div>
          <div className="flex items-center justify-center my-1">
            <FaFacebookMessenger />
            <a href={Links.messenger_link} target="blank" className="mx-2">
              Messenger
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
