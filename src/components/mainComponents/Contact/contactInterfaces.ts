export interface IInputData{
    id:string;
    type:string;
    name:string;
    placeholder:string;
    className:string;
    prefix:string; 
    field:string;
    errors:any;
}

export interface ITextareaData{
    id:string;
    name:string;
    placeholder:string;
    className:string;
    prefix:string; 
    field:string;
    errors:any;
}

export interface ISubmitData{
    className:string;
    type:string;
    value:string;
    disabled:any;
}