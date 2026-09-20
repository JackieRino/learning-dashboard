

// const langArray= [[{id:2,name:"west"},{id:2,name:"west"},{id:2,name:"west"}],[{id:5,name:"green"}]];

// const individualLanguageObject= {id:5};

// const eventObject= {target:{value:"gift"}};

// const something =langArray.map(individualLanguageArray=>{
//     return individualLanguageArray.map(oneLanguageObject=>{

//        if( oneLanguageObject.id == individualLanguageObject.id){
//             // update oneLanguageObject
//           return  {...oneLanguageObject,programe: eventObject.target.value};



//        }else {
//         return oneLanguageObject
//        }
// })
// });
// console.log(something);




const langArray= [[{id:2,name:"west"},{id:2,name:"west"},{id:2,name:"west"}],[{id:5,name:"green"}]];

const individualLanguageObject= {id:5};

const eventObject= {target:{value:"gift"}};

const something =langArray.map(individualLanguageArray=>{
    return individualLanguageArray.map(oneLanguageObject=>{

       if( oneLanguageObject.id == individualLanguageObject.id){
            // update oneLanguageObject
           
           return {...oneLanguageObject,programe: eventObject.target.value};

          

       }else {
        return oneLanguageObject
       }
})
});
console.log(something);