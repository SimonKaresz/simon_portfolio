export const InputDatas=[
    {
        id:"name",
        type:"text",
        name:"name",
        placeholder:"Name",
        className:"my-8 rounded-lg border-2 border-blue-900 bg-transparent p-2 focus:outline-none",
        prefix:"Name", 
        field:"name",
    },
    {
        id:"email",
        type:"email",
        name:"email",
        placeholder:"Email",
        className:"my-8 rounded-lg border-2 border-blue-900 bg-transparent p-2 focus:outline-none",
        prefix:"Email", 
        field:"email",
    },
    
]

export const TextareaData=[
    {
        id:"message",
        name:"email",
        placeholder:"Message",
        className:"my-8 h-[200px] resize-none rounded-lg border-2 border-blue-900 bg-transparent p-2 focus:outline-none",
        prefix:"Message", 
        field:"message",
    }
]

export const SubmitData=[
    {
        className:"mx-auto w-[200px] cursor-pointer rounded-lg border-2 border-indigo-400 p-3 transition duration-500 ease-in-out hover:bg-indigo-400 active:bg-indigo-400",
        type:"submit",
        value:"Send Message",
    }
]