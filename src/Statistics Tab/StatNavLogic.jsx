import { useState } from "react";
import { CompletedProjects } from "./CompletedProjects"
import { LearningHours } from "./LearningAnalytics";
import ModuleProgress from "./ModuleProgress"
 import { StatisticsHomePage } from "./StatisticsHomePage";




export const StatNavLogic = () => {

const moduleProgress= <ModuleProgress/>;
const completedProjects= <CompletedProjects/>;
const learningHours= <LearningHours/>;
 const statHome= <StatisticsHomePage/>

const pages= [{buttonName:"ModuleProgress", component:moduleProgress},
              {buttonName: "CompletedProjects", component: completedProjects},
              {buttonName: "LearningHours", component: learningHours},
               {buttonName:"Home", component: statHome},
];

const [pageSelected, setPageSelected]=useState("Home")

function changePage(event){
  console.log("button works");
  setPageSelected(event.target.value);
}


  return (
    <>

  
      
    <h1>Statistics homepage</h1>

      <div >
      <button className="navButton " value="ModuleProgress" onClick={(event)=>changePage(event)} >Module Progress</button>
      <button className="navButton" value="LearningHours" onClick={(event)=>changePage(event)}>Learning Hours</button>
      <button className="navButton" value="CompletedProjects" onClick={(event)=>changePage(event)}>Completed Projects</button>
      <button className="navButton" value="Home" onClick={(event)=>changePage(event)}>Statistics Home</button>
    </div>
    

     {pages.map(page=>{
     if(pageSelected === page.buttonName){return page.component}
    })} 
    </>
  )
}
