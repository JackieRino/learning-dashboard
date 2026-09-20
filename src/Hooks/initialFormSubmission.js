import { useState } from "react";


export function useInitialFormSubmission(languagesState,setLanguagesState) {

     
    const [projects, setProjects] = useState([]);

    function formSubmission(event) {

        event.preventDefault();

        const formInfo = new FormData(event.currentTarget);

        const infoObject = Object.fromEntries(formInfo);

        infoObject.languages = languagesState;

        setProjects(currentProjects => {

            const newObject = { ...infoObject, id: crypto.randomUUID(), edit: "editOff" };
            return [...currentProjects, newObject]
        });


        // ##reset section
        event.currentTarget.reset();
        setLanguagesState([]);

        const proButtons = event.currentTarget.elements.namedItem("language");
        proButtons.forEach(btton =>
            btton.classList.remove("clicked")
        );
    }


    return  { formSubmission, projects,setProjects};
}

{/*
#initialFormSubmission is a hook. it contains a state [projects] and a function [onSubmitHandler].
#line 10 stops the browsers default form submission.
#get all the information from the form and dstore it in the variable called [formInfo].
#store that information inside the variable [infoObject] in the format of an object. 
#add a property caulled languages and store the array currently in the languages state as its value.
#copy whatever is currently in the projects state and add the object
# reset the form feilds.
#reset the languages state to an empty array.
#remove the clicked classlist from all language buttons
 */}