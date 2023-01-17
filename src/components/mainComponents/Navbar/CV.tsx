import { ICVData } from "./navbarInterfaces";

export const CV = (props: ICVData) => {
  return (
    <a href={props.href} target="blank">
      {props.text}
    </a>
  );
};
