interface ProgressData {
  stack_name: string;
  stack_knowledge_level: number;
  color: string;
}

export const ProgressBar = (props: ProgressData) => {
  return (
    <div className="mb-2 select-none">
      <h1 className="text-2xl text-center mb-2 font-bold">
        {props.stack_name}
      </h1>
      <div className="w-full rounded-xl bg-white/[.3]">
        <div
          className="text-right pr-1 rounded-xl font-bold text-2xl"
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
