

export function useWhenTheLanguageIsEdited(projects,setProjects) {

    const langArrays = projects.map(project => project.languages);

    function editTheLanguage(event, oneLangaugeObject) {

        const theEditedArray = langArrays.map(oneLanguageArray => {
            return oneLanguageArray.map(singleLanguageObject => {
                    if(oneLangaugeObject.id == singleLanguageObject.id){
                        return {...singleLanguageObject, program : event.target.value};
                    }else {
                        return singleLanguageObject;
                    }
            })
        })

        const projectsStateWithEditedLanguages= projects.map((project,index)=>{
            return {...project, languages: theEditedArray[index]};
        })

        setProjects(projectsStateWithEditedLanguages);
    }
    return editTheLanguage;
}

// followed the same logic as language array creator
