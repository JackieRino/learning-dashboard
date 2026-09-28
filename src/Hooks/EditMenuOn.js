

export function useShowEditMenu(projects, setProjects){
    
    const editedOn = "editOn";


    function ShowMenu(project){
        console.log("the button is working")
        const newArray = projects.map(object=>{

            if(object.id == project.id && object.edit == "editOff"){
                return {...project, edit: editedOn};
            }else {
               return object;
            }
        })

 setProjects(newArray);
    }

    return ShowMenu;
   
};

/*
#this code is literally only responsible for changing a single project's edit property to either on or off. (the value of this property will be used later on).
#the code looks for the object that matches the project at the button and changes the propety there whilst returning all the other objects that dont match. end result? an array with untouched objects and only one with the changed property value. then set that to the state
#Because this works with and on the state and the updater function itll be called on the parent and pased into the child.
*/