import { ProjectCard } from "../otherComponents/project-card/project-card";
import { ProjectData } from "../otherComponents/project-card/project_data";
export const Project = () => {
  const project = ProjectData;

  return (
    <section
      id="project"
      className="text-white w-full py-48 flex flex-col justify-center items-center bg-gradient-to-b from-black to-indigo-900"
    >
      <h1 className="text-5xl mb-20 font-bold text-orange-600">My Projects</h1>
      <div className="grid grid-cols-3 gap-y-6 justify-center items-center select-none max-lg:grid-cols-1 max-xl:grid-cols-2">
        {project.map((data, index) => {
          return <ProjectCard key={index} {...data} />;
        })}
      </div>
    </section>
  );
};
