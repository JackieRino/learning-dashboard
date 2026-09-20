



export const LanguageEditInputField = (props) => {

  //  INITIAL VALUE of programe was languages
  // the updater function of programe changed the vlaue of programe to whatever was the new value at input
  // then the programe state can be whats put inside projects state

    

  return (
    <div>
      <input
                id="languageEditer"
                            value = {props.InputProgram}
                            onChange={props.OnChangeHandler}/>
                            
    </div>
  )
}


{/*I asked AI:
  1. can the parent access the child's state directly? 
      No. the child can access the parents but the parents cant access the childs.
      #MYLOGIC: languages is a state that belongs to the parent. it holds the languages array that wouldve been passed into props.programe as the programe state initial value if it was in the child. so moving the programe state to the parent gives direct access to parents state and easy manipulation of the projects state.
  2. if the child can access the parents state, then they can access the updater function as well?
      yes. if its passed to the child.
      #MYLOGIC: things get "passed to the child" via props, so the child will have a props where the update function for the state programe can go.
  3. can a function in the parent component acess an event object that took place at the child component?
      yes, but not directly.
      #MYLOGIC: the function props must have the parameter passed in it, so that the function beign passed into the prop can acess it. make sure the paramter is passed everywhere the function to be passed has been declared.
  4.
  
  */}