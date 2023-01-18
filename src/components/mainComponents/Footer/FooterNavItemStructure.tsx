import { IFooterNav } from "./footerInterfaces";

export const FooterNavItemStructure = (props: IFooterNav) => {
  return (
    <a className={props.className} href={props.href}>
      {props.text}
    </a>
  );
};
