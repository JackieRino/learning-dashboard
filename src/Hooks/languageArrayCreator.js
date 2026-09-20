import { useState } from "react";



export function useLanguageArrayCreator() {

    const [languagesState, setLanguagesState] = useState([]);


    function languageFunction(event) {


        const isClicked = event.target.classList.contains("clicked");


        if (!isClicked) {

            event.target.classList.add("clicked");

            const newLanguage = {
                id: crypto.randomUUID(),
                program: event.target.value
            };
        




            setLanguagesState(currentLanguages => {
                return [...currentLanguages, newLanguage];
            })

        } else {

            event.target.classList.remove("clicked");

            const localArray = [...languagesState];
            const index = localArray.findIndex(language => language.program == event.currentTarget.value);
            localArray.splice(index, 1);
            console.log(localArray);

            setLanguagesState(localArray);
            
        }

    
    }

    return {languageFunction,languagesState,setLanguagesState};
};

/*
# this hook is responsible only for creating the language array from the buttons clicked and storing it in languages state
# inside the hook is a state and a function.
#inside the function is an if statement that checked where isClciked is true or false
#if false, it adds the clicked class. then creates a new language object with the information at the button clicked. then adds that object to the state array.
#if true, it removes the class clicked. then creates a local copy of the state. checks for the index where the value at the button matches the value in the local array. removes it. then makes state the new version of local array.
#the return value of the hoook is the product of the function in it.
#local array is a copy of the state. this was done because react was using state as the starting point of the remove expression meaning what was being removed was still present(explain this logic better).
*/