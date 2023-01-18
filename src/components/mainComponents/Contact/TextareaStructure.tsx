import { ValidationError } from "@formspree/react";
import { ITextareaData } from "./contactInterfaces";

export const TextareaStructure = (props: ITextareaData) => {
  return (
    <>
      <textarea
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
      />
      <ValidationError
        prefix={props.prefix}
        field={props.field}
        errors={props.errors}
      />
    </>
  );
};
