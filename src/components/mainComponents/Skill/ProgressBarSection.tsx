import { ProgressBar, SkillBoxData } from "./skillsIndex";

export const ProgressBarSection: any = () => {
  return SkillBoxData.map((data, idx) => {
    return (
      <div key={idx} className={data.boxClassName}>
        <h1 className={data.headerClassName}>{data.headerText}</h1>
        <div className="px-5 py-20">
          {data.children.map((progressData, i) => (
            <ProgressBar
              key={i}
              stack_name={progressData.stackName}
              stack_knowledge_level={progressData.StackKnowledgeLevel}
              color={progressData.color}
            />
          ))}
        </div>
      </div>
    );
  });
};
