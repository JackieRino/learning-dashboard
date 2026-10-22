// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import { useState } from 'react';

import { ConceptsHomePage } from './Concepts Tab/ConceptsHomePage';
import Home from './Home Tab/Home'
import { NotesHomePage } from './Notes Tab/NotesHomePage';
import { ProjectPage } from './ProjectPage Tab/Pages/ProjectHomePage';
import { StatNavLogic } from './Statistics Tab/StatNavLogic';





export function NavLogic() {
  
  
  const homePage= <Home/>;
  const projectPage= <ProjectPage/>;
  const statisticsPage= <StatNavLogic/>;
  const conceptsPage= <ConceptsHomePage/>;
  const notesPage= <NotesHomePage/>;

  
  // i think this code connects the button and the component
const pages= [{buttonName:"Home", component:homePage},
              {buttonName:"Project",component:projectPage},
              {buttonName:"Statistics", component:statisticsPage},
              {buttonName:"Concepts", component:conceptsPage},
              {buttonName:"Notes", component:notesPage}
];


const [buttonClicked, setButtonClicked]= useState("Home");
 

function buttonPageConnection(event){
return setButtonClicked(event.target.value);

}


  return (
    <>
     <div id="Nav">
        <button className="navButton" onClick={(event)=>buttonPageConnection(event)} value="Home" >Home</button>
        <button className="navButton" onClick={(event)=>buttonPageConnection(event)} value="Project" >Project</button> 
        <button className="navButton" onClick={(event)=>buttonPageConnection(event)} value="Statistics" >Statistics</button>
        <button className="navButton" onClick={(event)=>buttonPageConnection(event)} value="Concepts" >Concepts</button>
        <button className="navButton" onClick={(event)=>buttonPageConnection(event)} value="Notes" >Notes</button>      
      </div> 

    {pages.map(page=>{

        if(page.buttonName === buttonClicked){return page.component}
    })} 
    </>
  )

}
