// // import React from 'react'
 import { DropDownEditMenu } from "./DropDownEditMenu";
import { LanguageEditInputField } from "./ILanguageInput";
 


 export const ProjectDisplay = ( props) => {
 

props.UpdaterFunction;
return(
    <div id="displayPage">
    
      {props.Projects.map(project=>{

        return (
            <>
        <div className={`projectDisplay ${project.status}`} key= {project.id}>
            <h2>{project.name}</h2>
            <p>{project.status}</p>

             {project.languages.map(oneLanguageObject=>{
                if(project.edit == "editOn"){
                    return <LanguageEditInputField
                                key={oneLanguageObject.id}
                                InputProgram= {oneLanguageObject.program}
                                OnChangeHandler={props.LanguageEditer}
                                />
                }else {
                    return <p className="programDisplay" key={oneLanguageObject.id}>{oneLanguageObject.program}</p>

                }
            })}
            
              <button id="editMenuButton" onClick={()=>{props.ToShowEditMenu(project)} }>⋮</button>
             {/* line 168 on the project.jsx */}

             {
                project.edit === "editOn" && 
       <DropDownEditMenu Projects= {props.Projects} 
                        Project={project}
                        UpdaterFunction={props.UpdaterFunction}/>
            }
        </div>
       
            
        </> )

      })}

    </div>
      )}
