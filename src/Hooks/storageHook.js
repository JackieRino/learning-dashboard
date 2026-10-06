import { useEffect } from "react";


export function useStorage(projects){
    // this function needs projects the state passed into it
    useEffect(()=>{
        // the code that should run
        localStorage.setItem("allProjects",JSON.stringify(projects));
        
        // optional return function
    },[projects])
    // the dependency array

return useEffect;
}