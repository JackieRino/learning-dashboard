
// import { ProjectDisplay } from "./ProjectDisplay";
// import { LanguageInput } from "./ILanguageInput";





// import React from 'react'


// export const ProjectEntry = () => {




// ## DELETE HANDLER

// function handleDelete(project){


// setProjects(currentProjects=>
//     currentProjects.filter(currentObject=>
      
//        currentObject.id !== project.id

//     ) 
// )

// this works.
// when the button is clicked it runs a handler function that takes a parameter. the parameter is the project where the button was clicked.
// so i can use the object project inside the function.
// using it at the onclick with that parameter links that button with the information around where its at so i wont need Keys.






// }
// // ### POST SAVE language Editor

// //  const langArray= projects.flatMap(project=> project.language);
// // //  go into projects, and into each object. collect the languages array in each project and compile them into one array.maintaining the objects inside.
// // //  a variable that only contains an array of the objects that were in language arrays.
// //   const [Updatedprograme, setUpdatedPrograme]= useState(langArray);

// const langArray = projects.map(project=> project.languages);

//  function langChanger(individualLanguageObject,event){
    
// // find the object inside langArray that matches the object at the input
// // edit that programe
// // update languages at projects


// const theEditedArray =langArray.map(individualLanguageArray=>{
//     return individualLanguageArray.map(oneLanguageObject=>{

//        if( oneLanguageObject.id == individualLanguageObject.id){

//          return {...oneLanguageObject,programe: event.target.value};
//        } else {
//         return oneLanguageObject;
//        }
// })
// });

// const projectsWithEditedLanguage =projects.map((project,index)=> {
//     return {...project,languages:theEditedArray[index]};


// })

// setProjects(projectsWithEditedLanguage);

    
     
// };



// // function editedLanguage(){
// // console.log(projects);
// //     setProjects(oldProjectsVersion=>

// //             oldProjectsVersion.languages.map(savedLangObject=> 

// //                 Updatedprograme.map(storedlangObject=>{
                    
// //                     if(savedLangObject.id == storedlangObject && savedLangObject.programe !== storedlangObject.programe){

// //                         savedLangObject.programe === storedlangObject.programe;

// //                      return console.log(projects);
                    
// //                     } else{
// //                             return oldProjectsVersion;
// //                     }

// //  })
// //           )

// //    );
// // };



// // }


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