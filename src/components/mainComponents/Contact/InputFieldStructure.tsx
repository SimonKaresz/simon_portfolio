import { ValidationError } from "@formspree/react";
import { IInputData } from "./contactInterfaces";

export const InputfieldStructure = (props: IInputData) => {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        required
      />
      <ValidationError
        prefix={props.prefix}
        field={props.field}
        errors={props.errors}
      />
    </>
  );
};
