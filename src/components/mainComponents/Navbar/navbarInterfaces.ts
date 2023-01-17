import { IconType } from "react-icons/lib";

export interface INavData {
    href: string;
    text: string;
    event:()=>void;
  }
  
export interface ISocialLinkData {
    icon: IconType;
    link: string;
  }
  
export interface ICVData {
    href: string;
    text: string;
  }