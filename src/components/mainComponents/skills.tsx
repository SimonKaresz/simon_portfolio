import { ProgressBar } from "../otherComponents/skill/skill-progress";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="text-white w-full py-48 flex flex-col justify-center items-center bg-black"
    >
      <div className="flex mx-auto justify-center items-center">
        <h1 className="text-5xl font-extrabold text-lime-400 tracking-widest">
          My Stacks
        </h1>
      </div>
      <div className="flex max-lg:flex-col w-full justify-center items-center select-none">
        <div className="skill-bx border-blue-600  shadow-blue-600">
          <h1 className="skill-bx-header text-sky-600">Basic</h1>
          <div className="px-5 py-20">
            <ProgressBar
              stack_name="HTML"
              stack_knowledge_level={80}
              color="rgba(99,102,241,0.5),rgba(99,102,241,1)"
            />
            <ProgressBar
              stack_name="CSS"
              stack_knowledge_level={70}
              color="rgba(99,102,241,0.5),rgba(99,102,241,1)"
            />
            <ProgressBar
              stack_name="JS"
              stack_knowledge_level={60}
              color="rgba(99,102,241,0.5),rgba(99,102,241,1)"
            />
            <ProgressBar
              stack_name="TS"
              stack_knowledge_level={60}
              color="rgba(99,102,241,0.5),rgba(99,102,241,1)"
            />
          </div>
        </div>
        <div className="skill-bx border-rose-500 shadow-rose-500">
          <h1 className="skill-bx-header text-rose-500">Frameworks</h1>
          <div className="px-5 py-20">
            <ProgressBar
              stack_name="Bootstrap"
              stack_knowledge_level={50}
              color="rgba(244,63,94,.5),rgba(244,63,94,1)"
            />
            <ProgressBar
              stack_name="Tailwind"
              stack_knowledge_level={60}
              color="rgba(244,63,94,.5),rgba(244,63,94,1)"
            />
            <ProgressBar
              stack_name="Angular"
              stack_knowledge_level={40}
              color="rgba(244,63,94,.5),rgba(244,63,94,1)"
            />
            <ProgressBar
              stack_name="React"
              stack_knowledge_level={50}
              color="rgba(244,63,94,.5),rgba(244,63,94,1)"
            />
          </div>
        </div>
        <div className="skill-bx border-green-600 shadow-green-600">
          <h1 className="skill-bx-header text-green-600">Other</h1>
          <div className="px-5 py-20">
            <ProgressBar
              stack_name="Responsive Design"
              stack_knowledge_level={70}
              color="rgba(22,163,74,.5),rgba(22,163,74,1)"
            />
            <ProgressBar
              stack_name="Database"
              stack_knowledge_level={30}
              color="rgba(22,163,74,.5),rgba(22,163,74,1)"
            />
            <ProgressBar
              stack_name="Git"
              stack_knowledge_level={30}
              color="rgba(22,163,74,.5),rgba(22,163,74,1)"
            />
            <ProgressBar
              stack_name="Testing"
              stack_knowledge_level={20}
              color="rgba(22,163,74,.5),rgba(22,163,74,1)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
