import Project1Image from "../../../dist/image/project_img_1.png";
import Project2Image from "../../../dist/image/project_img_2.png";
import Project3Image from "../../../dist/image/project_img_3.png";
import Project4Image from "../../../dist/image/project_img_4.png";

export interface ProjectCardData {
    name: string;
    description: string;
    imageURL: string;
    appURL: string;
  }


export const ProjectData:ProjectCardData[]=[
    {
        name:"React Task App",
        description:"Simple Task Manager application",
        imageURL: Project1Image,
        appURL:"https://react-to-do-app-ea286.web.app/",
    },
    {
        name:"Angular Portfolio",
        description:"My porfolio page in angular(hun)",
        imageURL:Project2Image,
        appURL:"https://simonkaresz.github.io/portfolio/",
    },
    {
        name:"React Weather App",
        description:"Weather application with Open Weather API",
        imageURL:Project3Image,
        appURL:"https://simonkaresz.github.io/Weather-app-React/"
    },
    {
        name:"English learn App",
        description:"Learn English words easily(hun)",
        imageURL:Project4Image,
        appURL:"https://english-learning-130e2.web.app/"
    }

]