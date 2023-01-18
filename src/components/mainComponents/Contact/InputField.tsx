import { InputDatas, InputfieldStructure } from "./contactIndex";

export const InputField = (props: { errors: any }) => {
  return (
    <>
      {InputDatas.map((data, idx) => {
        return (
          <InputfieldStructure key={idx} {...data} errors={props.errors} />
        );
      })}
    </>
  );
};
