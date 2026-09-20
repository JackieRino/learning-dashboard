import { useLanguageArrayCreator } from "../Hooks/languageArrayCreator";
import { useInitialFormSubmission } from "../Hooks/initialFormSubmission";
import { useWhenTheLanguageIsEdited } from "../Hooks/WhenTheLanguageIsEdited";

import { ProjectEntryForm } from "./ProjectEntryForm";
 import { ProjectDisplay } from "./ProjectDisplay";

export const ProjectPage = () => {

    const {languageFunction,languagesState,setLanguagesState}= useLanguageArrayCreator();

    const {formSubmission,projects,setProjects}= useInitialFormSubmission(languagesState,setLanguagesState);

   const languageEditer= useWhenTheLanguageIsEdited(projects, setProjects);
 


  return (
    <div>
                 {/* THE FORM */}
      <ProjectEntryForm 
                LanguageFunction={languageFunction}
                FormSubmission={formSubmission}/>

                
                {/* THE DISPLAY */}

        <ProjectDisplay Projects={projects}
                        LanguageEditer={languageEditer} />
        


    </div>
  )
}

