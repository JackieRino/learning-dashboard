 

export const ProjectNameInputFeild = (props) => {
  return (
    <td>
      <input 
            id="nameEditer"
            value={props.InputName}
            onChange={props.onNameChange}/>
    </td>
  )
}


//  <div>
//       <input 
//             id="nameEditer"
//             value={props.InputName}
//             onChange={props.onNameChange}/>
//     </div>