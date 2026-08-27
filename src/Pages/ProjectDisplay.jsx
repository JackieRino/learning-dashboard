// // import React from 'react'

 export const ProjectDisplay = (props) => {
return(
    <div id="projectDisplay">
        <h2>{props.ProjectName}</h2>
        <p>{props.ProjectLanguages}</p>
        <p>{props.ProjectStatus}</p>
        {props.children}
    </div>


)


 }

