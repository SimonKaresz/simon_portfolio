import { TextareaData, TextareaStructure } from "./contactIndex";

export const TextareaField = (props: { errors: any }) => {
  return (
    <>
      {TextareaData.map((data, idx) => {
        return <TextareaStructure key={idx} {...data} errors={props.errors} />;
      })}
    </>
  );
};
