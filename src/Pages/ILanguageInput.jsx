



export const LanguageEditInputField = (props) => {

  //  INITIAL VALUE of programe was languages
  // the updater function of programe changed the vlaue of programe to whatever was the new value at input
  // then the programe state can be whats put inside projects state

    

  return (
    <li>
      <input
                id="languageEditer"
                            value = {props.InputProgram}
                            onChange={props.OnLanguageChange}/>
                            
    </li>
  )
}

