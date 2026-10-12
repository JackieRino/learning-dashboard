import { useState } from "react";
import { CompletedProjects } from "./CompletedProjects"
import { LearningHours } from "./LearningHours";
import ModuleProgress from "./ModuleProgress"
// import { StatisticsHomePage } from "./StatisticsHomePage";




export const StatNavLogic = () => {

const moduleProgress= <ModuleProgress/>;
const completedProjects= <CompletedProjects/>;
const learningHours= <LearningHours/>;
// const statHome= <StatisticsHomePage/>

const pages= [{buttonName:"ModuleProgress", component:moduleProgress},
              {buttonName: "CompletedProjects", component: completedProjects},
              {buttonName: "LearningHours", component: learningHours},
              // {buttonName:"Home", component: statHome},
];

const [pageSelected, setPageSelected]=useState("Home")

function changePage(event){
  console.log("button works");
  setPageSelected(event.target.value);
}


  return (
    <>

  
      

      <div >
      <button className="navButton " value="ModuleProgress" onClick={(event)=>changePage(event)} >Module Progress</button>
      <button className="navButton" value="LearningHours" onClick={(event)=>changePage(event)}>Learning Hours</button>
      <button className="navButton" value="CompletedProjects" onClick={(event)=>changePage(event)}>Completed Projects</button>
    </div>

     <div> 
      <p>youll get a chance to do the page switching logic here again because youll need to switch between the different statistics pages</p>
      <p>This home page will act as the app.jsx with its own nav component</p>

      <p>It will also hold general statistics: hours learned per week/months, practical vs course learnign time, learning concistencies and trends? </p>



    </div>

    

    {/* {pages.map(page=>{
     if(pageSelected === page.buttonName){return page.component}
    })} */}
    </>
  )
}
