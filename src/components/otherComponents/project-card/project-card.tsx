import { ProjectCardData } from "./project_data";

export const ProjectCard = (props: ProjectCardData) => {
  return (
    <div className="card">
      <img
        src={props.imageURL}
        alt={props.imageURL}
        className="w-[400px] h-[250px] max-[380px]:w-[355px]"
      />
      <div className="description">
        <h1 className="text-3xl mx-[5px] font-semibold mb-5 text-blue-800/80 select-none">
          {props.name}
        </h1>
        <p className="text-lg mb-5 mx-[5px] select-none">{props.description}</p>
        <a
          className="cursor-ponter py-2 px-1 w-16 border-2 mx-auto border-blue-400 rounded-xl hover:bg-gradient-to-r from-blue-500 to-blue-400"
          href={props.appURL}
          target="blank"
        >
          Watch
        </a>
      </div>
    </div>
  );
};
