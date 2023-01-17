import { INavData } from "./navbarInterfaces";

export const HeaderNavItemStructure = (props: INavData) => {
  return (
    <a onClick={props.event} href={props.href} className="nav_item">
      {props.text}
    </a>
  );
};
