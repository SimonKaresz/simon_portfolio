import { IProjectCardData } from "./projectInterface";

export const ProjectCard = (props: IProjectCardData) => {
  return (
    <div className="card">
      <img src={props.imageURL} alt={props.alt} className="h-[100%] w-full" />
      <div className="description">
        <h1 className="mb-5 select-none text-3xl font-semibold text-blue-800/80">
          {props.name}
        </h1>
        <p className="mb-5 select-none text-lg">{props.description}</p>
        <div className="flex w-[50%] items-center justify-evenly">
          <a
            className="cursor-ponter mx-auto w-16 rounded-xl border-2 border-blue-400 from-blue-500 to-blue-400 py-2 px-1 hover:bg-gradient-to-r"
            href={props.appURL}
            target="blank"
          >
            App
          </a>
          <a
            className="cursor-ponter mx-auto w-16 rounded-xl border-2 border-indigo-400 from-indigo-500 to-indigo-400 py-2 px-1 hover:bg-gradient-to-r"
            href={props.codeURL}
            target="blank"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
