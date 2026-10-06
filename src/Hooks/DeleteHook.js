

export function useToDeleteProject (setProjects){



function handleDelete(project){
  const question = confirm("Do You Want To Delete This Project?");
  
  if(question){
setProjects(currentProjects=>
    currentProjects.filter(currentObject=>
      
       currentObject.id !== project.id
     )  )
    }
  }
  return handleDelete
}