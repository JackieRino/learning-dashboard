 

export const ProjectNameInputFeild = (props) => {
  return (
    <div>
      <input 
            id="nameEditer"
            value={props.InputName}
            onChange={props.onNameChange}/>
    </div>
  )
}


