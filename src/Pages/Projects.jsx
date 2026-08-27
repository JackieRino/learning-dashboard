// import { LanguageButtons } from "./LanguageButtons";

// import React from 'react'


export const ProjectEntry = (props) => {


const onSubmitHandler= (event)=>{
    event.preventDefault();
    
const projects= [{}];

projects.map(project=>{

console.log("it works");
 console.log(languages);
 console.log(project);

})

}

const languages =[] ;
function languageHandler(event){

 const newLanguage= {
        id:crypto.randomUUID(),
        programe: event.target.value

    };

 const exsists = languages.some(language=>
        language.programe === newLanguage.programe
    );

    if(exsists){
        return languages
    }else {     

    languages.push(newLanguage);}

 return console.log(languages);

    /* each button has a programe attached to it. everytime a button is clicked, the language handler is run. where it creates a new object with the clicked button info, then takes the declared languages array and adds that to the end of that array. */


}







  return (
    <div>
        <form onSubmit={onSubmitHandler}>

        <input placeholder='Project Name'
              required 
               type="text"
               name="name"
               id="projectName"/>

        <select
            id="status" 
            name="Status"
             required
            
        >       <option value="" disabled selected>Select Status</option>
                <option value="Complete">Complete</option>
                <option value="In Progress">In Progress</option>
                <option value="Not Started">Not Started</option>

        </select>

        <br/>

        <button className="projectLanguageButton" type="button" name="language" value="JavaScript" onClick={languageHandler}>JavaScript</button>
        <button className="projectLanguageButton" type="button" name="language" value="React" onClick={languageHandler}>React</button>
        <button className="projectLanguageButton" type="button" name="language" value="CSS" onClick={languageHandler}>CSS</button>
        <button className="projectLanguageButton" type="button" name="language" value="Html" onClick={languageHandler}>Html</button>

{/* when these language buttons are clicked their respective launguages must be added to the form data object at the key language. */}
        <br/>
        <button type="submit" id="submitProject">Add Project</button>
      </form>
      {props.children}

    </div>
    
  )
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