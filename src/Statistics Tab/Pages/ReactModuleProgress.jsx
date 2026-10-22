import { useState, useCallback } from "react"


export function ReactModuleProgress(){

const [catFact, setCatFact]= useState("");


const generateCatFact = useCallback (async ()=>{
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  console.log(data);
  setCatFact(data.fact);
},[]);

const [dogFact,setDogFact]=useState("");
async function handleGenerateDogFact(){
  const response= await fetch("http://dog-api.kinduff.com");
  // this wont work. this api reqeust url

  const data= await response.json();
  setDogFact(data.fact);
}
  return (
    <>
    <h1>Practicing Using APIs</h1>
    
      <h2>Random Cat Facts</h2>
      <p>{catFact}</p>
      <button onClick={generateCatFact}>Generate Cat Fact</button>
<br></br>

      <h2>Random Dog Facts</h2>
      <p>{dogFact}</p>
      <button onClick={handleGenerateDogFact}>Generate Dog Fact</button>
    </>
  )
}


{/*
  #async tells Js that the function will need to wait for some operations that take time. if you want to use await you have to wirte async at the functions declaration.
  #fetch if what you use to make the request. remeber to make your request url a string.
  #the result of fetch is a promise object. we need to wait fort hat promise to resolve so its response can be used...hence await.
  #

Your Response object has a .json() method.
Calling it reads the response body and parses the JSON into JavaScript data. But remember, that method also returns a Promise.
So we need another await.
Store the parsed result in a variable called data.
Now data is an ordinary JavaScript object that contains the cat fact and its length.
Step 4: Put the fact into React state
Remember the state you created?
fact holds the current fact.
setFact updates it.
The API returns an object containing two properties: fact and length.
You only want the fact itself. In JavaScript, you access an object's property using dot notation.
So the final step is to pass the fact property from data into setFact.
React will then update your paragraph automatically. You don't need to manipulate the HTML yourself.

  */}