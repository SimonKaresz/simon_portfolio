import { IconType } from "react-icons/lib";

export interface IFooterNav{
    href: string;
    text: string;
    className:string;
}

export interface ISocialLinkData{
    icon: IconType;
    link: string;
    target:string;
    className:string;
    platformName:string;
}