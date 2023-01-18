import { ISocialLinkData } from "./footerInterfaces";

export const FooterSocialStructure = (props: ISocialLinkData) => {
  return (
    <div className="my-1 flex items-center justify-center">
      <props.icon />
      <a href={props.link} target={props.target} className={props.className}>
        {props.platformName}
      </a>
    </div>
  );
};
