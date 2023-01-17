import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Links } from "../../otherComponents/links/links";

export const Footer = () => {
  return (
    <footer className="flex w-full select-none flex-col items-center justify-center bg-gradient-to-b from-black py-12 text-white">
      <div className="flex w-full items-center justify-around max-md:flex-col-reverse">
        <div>
          <h1>© Simon Károly 2022</h1>
        </div>
        <div className="max-md:text-md flex items-center justify-center text-center max-md:my-12 max-[380px]:flex-col">
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
        <div className="flex flex-col items-start justify-center">
          <div className="my-1 flex items-center justify-center">
            <FaFacebookSquare />
            <a href={Links.facebook_link} target="blank" className="mx-2">
              Facebook
            </a>
          </div>
          <div className="my-1 flex items-center justify-center">
            <FaLinkedin />
            <a href={Links.linkedin_link} target="blank" className="mx-2">
              Linkedin
            </a>
          </div>
          <div className="my-1 flex items-center justify-center">
            <FaGithubSquare />
            <a href={Links.github_link} target="blank" className="mx-2">
              GitHub
            </a>
          </div>
          <div className="my-1 flex items-center justify-center">
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
