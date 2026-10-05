import { useLanguageArrayCreator } from "../Hooks/languageArrayCreator";
import { useInitialFormSubmission } from "../Hooks/initialFormSubmission";
import { useWhenTheLanguageIsEdited } from "../Hooks/WhenTheLanguageIsEdited";
import { useShowEditMenu } from "../Hooks/EditMenuOn";
import { useWhenNameIsEdited } from "../Hooks/WhenNameIsEdited";

import { ProjectEntryForm } from "./ProjectEntryForm";
 import { ProjectDisplay } from "./ProjectDisplay";





export const ProjectPage = () => {

    const {languageFunction,languagesState,setLanguagesState}= useLanguageArrayCreator();

    const {formSubmission,projects,setProjects}= useInitialFormSubmission(languagesState,setLanguagesState);

   const languageEditer= useWhenTheLanguageIsEdited(projects, setProjects);

    const nameEditer= useWhenNameIsEdited(projects,setProjects);

 
   const toShowEditMenu= useShowEditMenu(projects,setProjects);


  return (
    <div>
                 {/* THE FORM */}
      <ProjectEntryForm 
                LanguageFunction={languageFunction}
                FormSubmission={formSubmission}/>

                
                {/* THE DISPLAY */}

        <ProjectDisplay Projects={projects}
                        LanguageEditer={languageEditer} 
                        ToShowEditMenu = {toShowEditMenu}
                        UpdaterFunction={setProjects}
                        NameEditer={nameEditer}
                        />
                         

     


    </div>
  )
}

