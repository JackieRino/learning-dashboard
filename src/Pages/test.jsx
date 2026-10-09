import { LanguageEditInputField } from "./ILanguageInput";
import { ProjectNameInputFeild } from "./ProjectNameInputFeild";
import {ProjectStatusInputFeild} from "./ProjectStatusInputFeild";

 


 export const TestDisplay = ( props) => {
 

props.UpdaterFunction;
return(
<> 

<table className="table">
                <thead>
                    <tr>
                    <th>Project Name</th>
                    <th>Status</th>
                    <th>Programes</th>
                    </tr>
                </thead>
                <tbody>
             {props.Projects.map(project=>   
                    <tr className={`projectDisplay ${project.status}`} key={project.id}>

     {project.edit== "editOn" ? (
            <>
                  <ProjectNameInputFeild
                    InputName={project.name}
                    onNameChange={(event)=>props.NameEditer(event,project)}/>
                                       
                    <ProjectStatusInputFeild  ProjectBeingEdited={project}
                                              StatusSubmitter={props.StatusSubmitter}/>
            </>
            ): (
            <>                        
                        <td id="nameDisplay">{project.name}</td>
                        <td>{project.status}</td>

                        </>
                        )}

                        <td>
                            <ul id="languageListAtDisplay">
                        {project.languages.map(oneLanguageObject=>{
                            if(project.edit == "editOn"){
                    return <LanguageEditInputField
                                key={oneLanguageObject.id}
                                InputProgram= {oneLanguageObject.program}
                                OnLanguageChange={(event)=>props.LanguageEditer(event,oneLanguageObject)}
                                />}else{
                            return <li key={oneLanguageObject.id}>{oneLanguageObject.program}</li>}
      })}
                            </ul>
                        </td>
                        <td>
                            <button id="editMenuButton" onClick={()=>{props.ToShowEditMenu(project)} }>Click to Edit/ Click to Save</button>
                            <br/>
                            { project.edit === "editOn" &&   
                        <button id="deleteProject" onClick={()=>props.DeleteProject(project)}>Delete Project</button>
                       }
                            </td>

                       
                    </tr>
                )}
                </tbody>
            </table>


 
    <div id="displayPage">
    
      {props.Projects.map(project=>{

        return (
                   

        <div className={`projectDisplay ${project.status}`} key= {project.id}>

           {project.edit== "editOn" ? (
            <>
                  <ProjectNameInputFeild
                    InputName={project.name}
                    onNameChange={(event)=>props.NameEditer(event,project)}/>
                                       
                    <ProjectStatusInputFeild  ProjectBeingEdited={project}
                                              StatusSubmitter={props.StatusSubmitter}/>
            </>
            ): (
            <>
                     <h2>{project.name}</h2> 
                     <p>{project.status}</p> 
            </>
          )}  

            
           

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
            
              <button id="editMenuButton" onClick={()=>{props.ToShowEditMenu(project)} }>Click to Edit/ Click to Save</button>
             {/* line 168 on the project.jsx */}

             {
                project.edit === "editOn" && 

<button id="deleteProject" onClick={()=>props.DeleteProject(project)}>Delete Project</button>
      
            }
        </div>
       

       
            
        )

      })}

    </div>

    </>
      )}
