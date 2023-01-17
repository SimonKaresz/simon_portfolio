import { ProjectField, ProjectTitle } from "./projectIndex";

export const Project = () => {
  return (
    <section
      id="project"
      className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-black to-indigo-900 py-12 text-white"
    >
      <ProjectTitle />
      <ProjectField />
    </section>
  );
};
