

export const ProjectStatusInputFeild =(props)=>{

props.ProjectBeingEdited

  return (
    <td>
      
      <select
                        
                        
                        required
                        onChange={(event)=>props.StatusSubmitter(props.ProjectBeingEdited,event)}
                      value={props.ProjectBeingEdited.status}>

                        <option value="Complete">Complete</option>
                        <option value="Incomplete">Incomplete</option>
                        <option value="Pending">Pending</option>

                    </select>

                    
          
    </td>
  )
}

// <div>
      
//       <select
                        
                        
//                         required
//                         onChange={(event)=>props.StatusSubmitter(props.ProjectBeingEdited,event)}
//                       value={props.ProjectBeingEdited.status}>

//                         <option value="Complete">Complete</option>
//                         <option value="Incomplete">Incomplete</option>
//                         <option value="Pending">Pending</option>

//                     </select>

                    
          
//     </div>
