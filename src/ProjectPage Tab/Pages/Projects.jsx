
// import { ProjectDisplay } from "./ProjectDisplay";
// import { LanguageInput } from "./ILanguageInput";





// import React from 'react'


// export const ProjectEntry = () => {






// // ############## STATUS CHANGER

// function statusChanger(project){



//     setProjects(oldProjects=>
//         oldProjects.map(oldObject=>{
//             if(oldObject.id === project.id){

//                 return { ...oldObject, status:"Incomplete"}

//             } else {
//                 return oldObject;
//             }
//         })
//     )
// }









// return (
//     


{/* //         <button id="delete" onClick= {()=> handleDelete(project)}>Delete</button> */}
{/* //            writing your onclick this way direclty links the button with the information here so you wont need a key but can just reference what you want.
//         <button id="edit" onClick={()=>{editHandler(project)}} >Edit</button>

//         <div className= {`editMenu ${project.edit}`}>
//             <ul>
//                 <li><button onClick={()=> statusChanger(project)}>Change Status</button></li>
//                { /*<li><button onClick= {()=>editedLanguage(project)}>confirm</button></li>*/}
{/* //             </ul>
//         </div>
//         </ProjectDisplay> */}
      
{/* //       </div> */}
    
{/*       
//     )}
    
//     </div>
//     {/* access input component value through project.jsx */}
{/* //  </div> ) */} 

// 






// // issues: the form refreshes the page immediately after the form has been submitted. meaning i dont get to see the console at all! fixed. 
// // preventDefault exsists in the context of the event hence the syntax.
// // 

// //  formData has methods that are used to access its values and keys

// // const formData = new
// // FormData (event.currentTarget)
// // formData.get("the key name youre accessing")
// // this is how you create the form data. only then can you use its methods


// //  the languages still arent being included
// // still need to create the object project
// // is there any state?

// // issue: when the form is submitted whatever project was entered that caused the submission will be included in the next rerender. why? IT WAS THE PLACEMENT OF YOUR CONSOLE.LOG