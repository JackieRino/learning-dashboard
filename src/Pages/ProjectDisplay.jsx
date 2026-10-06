// // import React from 'react'
 import { DropDownEditMenu } from "./DropDownEditMenu";
import { LanguageEditInputField } from "./ILanguageInput";
import { ProjectNameInputFeild } from "./ProjectNameInputFeild";
import ProjectStatusInputFeild from "./ProjectStatusInputFeild";

 


 export const ProjectDisplay = ( props) => {
 

props.UpdaterFunction;
return(
    <div id="displayPage">
    
      {props.Projects.map(project=>{

        return (
            
        <div className={`projectDisplay ${project.status}`} key= {project.id}>

           {project.edit== "editOn" ? <ProjectNameInputFeild

                    InputName={project.name}
                    onNameChange={(event)=>props.NameEditer(event,project)}/> && <ProjectStatusInputFeild/> : <h2>{project.name}</h2>} 

            
            <p>{project.status}</p>

             {project.languages.map(oneLanguageObject=>{
                if(project.edit == "editOn"){
                    return <LanguageEditInputField
                                key={oneLanguageObject.id}
                                InputProgram= {oneLanguageObject.program}
                                OnLanguageChange={(event)=>props.LanguageEditer(event,oneLanguageObject)}
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
       
            
        )

      })}

    </div>
      )}
