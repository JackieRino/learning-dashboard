

export const DropDownEditMenu = (props) => {

props.Projects; 
props.Project;
props.UpdaterFunction;

function handleDelete(){
  console.log(props.Project);
props.UpdaterFunction(currentProjects=>
    currentProjects.filter(currentObject=>
      
       currentObject.id !== props.Project.id
     )  )
    }
    
  return (
    <>
  
   <div className = "editMenu" >
    
      <button id="deleteButton" onClick={handleDelete} >Delete Project</button>
      <button>Save Edits</button>
    </div>
  


  </>
  )}


{/*
    #your onclick function at the delete button will have to be a hook
    #
    */}