

export function useWhenStatusIsEdited(projects,setProjects){

    
    function editStatus(project,event){
    

        

       const projectsStateAfterStatusEdit=  projects.map(projectState=>{

           if(projectState.id == project.id){
            return {...projectState, status: event.target.value}
           }else {
            return projectState
           }
        });
  
       setProjects(projectsStateAfterStatusEdit);
        
}
return editStatus
}

