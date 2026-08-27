// import { LanguageButtons } from "./LanguageButtons";

import { useState } from "react";
import { ProjectDisplay } from "./ProjectDisplay";

// import React from 'react'


export const ProjectEntry = (props) => {


    const [languages,setLanguages] = useState([]);


function languageHandler(event){


    event.target.classList.add("clicked");
    // How do i reset this when the form submits?


   
   

 const newLanguage= {
        id:crypto.randomUUID(),
        programe: event.target.value,
        

    };

const exsists = languages.some(language=>
        language.programe === newLanguage.programe
    );

    setLanguages(currentLanguages=>{



    if(exsists){
        return currentLanguages
    }else {     

    return [...currentLanguages,newLanguage];


    
    }})

    /* each button has a programe attached to it. everytime a button is clicked, the language handler is run. where it creates a new object with the clicked button info, then it checks if that language already exsists inside the the declared languages array, if it does it doesnt add, if it doesnt exsist it adds it to the end of that array. that language array is then stored in state. this logic all exsist inside the undater function*/


}

const [projects, setProjects] = useState([]);

const onSubmitHandler= (event)=>{
    event.preventDefault();
    // stops the browsers default form sumbission when the button is clicked
    
    // create the form information first

    const formInfo= new FormData(event.currentTarget);
    // take the infromation collected from the form(target) that was targeted by the event(submission) and store it in the variable formInfo

    const infoObject= Object.fromEntries(formInfo);
    // take the data inside formInfo and store it in the variable infoObject in the formatt of an object.

    infoObject.language= languages;

    setProjects (currentProjects=>
        [...currentProjects,infoObject]
    
    )
    // currentProjects is an array. the last rememeberd version of the array. infoObject is an object thatll get added to that array. 


// ### resetting section
    event.currentTarget.reset();
    setLanguages([]);

    const proButtons= event.currentTarget.elements.namedItem("language");
    proButtons.forEach(btton=>
       btton.classList.remove("clicked")
    );
    // named items is a RADIONODELIST in an array form like. not sure what that is but if its an array, and each button is an item then the logic above should work. namedItems is a form event property.

    //  the form is reset after the porject state has been updated.
    // the language state resets as well afger each project occurence.
console.log(projects);
}



  return (
    <>
    <h1>Projects</h1>
    <div id="formEntry">
        <form onSubmit={onSubmitHandler}>

        <input placeholder='Project Name'
              required 
               type="text"
               name="name"
               id="projectName"/>

        <select
            id="status" 
            name="status"
             required

            
        >      <option value="">Select Status</option>
                <option value="Complete">Complete</option>
                <option value="In Progress">In Progress</option>
                <option value="Not Started">Not Started</option>

        </select>

        <br/>

        <button className="projectLanguageButton"  type="button" name="language" value="JavaScript" onClick={languageHandler}>JavaScript</button>
        <button className="projectLanguageButton" type="button" name="language" value="React" onClick={languageHandler}>React</button>
        <button className="projectLanguageButton"  type="button" name="language" value="CSS" onClick={languageHandler}>CSS</button>
        <button className="projectLanguageButton"  type="button" name="language" value="Html" onClick={languageHandler}>Html</button>

{/* when these language buttons are clicked, they create a language array. how do i add that array to the form data? */}
        <br/>
        <button type="submit" id="submitProject">Add Project</button>
      </form>
      {props.children}

    </div>
    <div>
        <h2>kghjgjkg</h2>
        
    {projects.map(project=>{

      return (<ProjectDisplay ProjectName={project.name} ProjectLanguages={project.language} ProjectStatus={project.status}/>  )

    })
    
}</div>
 </> )
}

// issues: the form refreshes the page immediately after the form has been submitted. meaning i dont get to see the console at all! fixed. 
// preventDefault exsists in the context of the event hence the syntax.
// 

//  formData has methods that are used to access its values and keys

// const formData = new
// FormData (event.currentTarget)
// formData.get("the key name youre accessing")
// this is how you create the form data. only then can you use its methods


//  the languages still arent being included
// still need to create the object project
// is there any state?

// issue: when the form is submitted whatever project was entered that caused the submission will be included in the next rerender. why? IT WAS THE PLACEMENT OF YOUR CONSOLE.LOG