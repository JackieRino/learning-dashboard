// // import React from 'react'
 import { LanguageEditInputField } from "./ILanguageInput";


 export const ProjectDisplay = (props) => {
 


return(
    <div id="displayPage">
    
      {props.Projects.map(project=>
    
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
            
             <button id="editMenuButton" onClick={}>⋮</button>
             {/* line 170 on the project.jsx */}
        </div>

        // this is where youll put the edit menue component
    )

    }  
    
  
   
   
    </div>


)


 }

