

export const DropDownEditMenu = (props) => {

  const projects = [...props.Projects];

  const project = projects.map(OneObject=> OneObject);

  return (
    <div classname = {`editMenu ${project.edit}`} >
    
       <button>Edit Name</button>
      <button >Change Status</button>
      <button>Edit Language</button>
      <button id="deleteButton" onClick>Delete Project</button>


    </div>
  )
}

{/*
    #your onclick function at the delete button will have to be a hook
    #
    */}