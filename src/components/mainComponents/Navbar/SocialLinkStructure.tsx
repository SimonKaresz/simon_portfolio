import { ISocialLinkData } from "./navbarInterfaces";

export const SocialLinkStructure = (props: ISocialLinkData) => {
  return (
    <a href={props.link} target="blank">
      <props.icon className="navbar-social" />
    </a>
  );
};
