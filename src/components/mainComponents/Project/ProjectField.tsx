import { ProjectCard, ProjectData } from "./projectIndex";

export const ProjectField = () => {
  return (
    <div className="grid w-[800px] max-w-full select-none grid-cols-1 items-center justify-center gap-0 min-[600px]:grid-cols-2">
      {ProjectData.map((data, idx) => {
        return <ProjectCard key={idx} {...data} />;
      })}
    </div>
  );
};
