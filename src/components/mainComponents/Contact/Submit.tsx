import { SubmitData, SubmitStructure } from "./contactIndex";

export const Submit = (props: { disabled: any }) => {
  return (
    <>
      {SubmitData.map((data, idx) => {
        return (
          <SubmitStructure key={idx} {...data} disabled={props.disabled} />
        );
      })}
    </>
  );
};
