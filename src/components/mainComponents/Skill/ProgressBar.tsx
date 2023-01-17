import { IProgressData } from "./skillsInterfaces";

export const ProgressBar = (props: IProgressData) => {
  return (
    <div className="mb-2 select-none">
      <h1 className="mb-2 text-center text-2xl font-bold">
        {props.stack_name}
      </h1>
      <div className="w-full rounded-xl bg-white/[.3]">
        <div
          className="rounded-xl pr-1 text-right text-2xl font-bold"
          style={{
            width: props.stack_knowledge_level + "%",
            backgroundImage: `linear-gradient(to right,${props.color})`,
          }}
        >
          {props.stack_knowledge_level}%
        </div>
      </div>
    </div>
  );
};
