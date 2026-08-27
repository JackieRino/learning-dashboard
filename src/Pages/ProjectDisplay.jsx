// // import React from 'react'

 export const ProjectDisplay = (props) => {
return(
    <div id="projectDisplay">
        <h2>{props.Name}</h2>
        <p>{props.Languages}</p>
        <p>{props.Status}</p>
        {props.children}
    </div>


)


 }

