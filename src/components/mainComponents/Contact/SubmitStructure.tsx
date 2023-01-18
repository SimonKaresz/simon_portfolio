import { ISubmitData } from "./contactInterfaces";

export const SubmitStructure = (props: ISubmitData) => {
  return (
    <input
      className={props.className}
      type={props.type}
      value={props.value}
      disabled={props.disabled}
    />
  );
};
