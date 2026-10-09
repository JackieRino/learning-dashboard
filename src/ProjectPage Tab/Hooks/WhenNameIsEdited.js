

export function useWhenNameIsEdited(projects,setProjects) {
  
  
  function editTheName(event,project){
  
   const projectsStateWithEditedName= projects.map(oneProject=>{
    if(oneProject.id== project.id){
      return {...oneProject, name: event.target.value};
    }else {
      return oneProject;
    }
   });
   
   setProjects(projectsStateWithEditedName);
  }
return editTheName
}


