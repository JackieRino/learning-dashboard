



export const ProjectEntryForm = (props) => {


   


    return (

        <div id="projectsDashboard">
            <h1>Projects</h1>
            <div id="formEntry">
                <form onSubmit={props.FormSubmission}>

                    <input placeholder='Project Name'
                        required
                        type="text"
                        name="name"
                        id="projectName" />

                    <select
                        id="status"
                        name="status"
                        required


                    >      <option value="">Select Status</option>
                        <option value="Complete">Complete</option>
                        <option value="Incomplete">Incomplete</option>
                        <option value="Pending">Pending</option>

                    </select>

                    <br />

                    <button className="projectLanguageButton" type="button" name="language" value="JavaScript" onClick={props.LanguageFunction}>JavaScript</button>
                    <button className="projectLanguageButton" type="button" name="language" value="React" onClick={props.LanguageFunction}>React</button>
                    <button className="projectLanguageButton" type="button" name="language" value="CSS" onClick={props.LanguageFunction}>CSS</button>
                    <button className="projectLanguageButton" type="button" name="language" value="Html" onClick={props.LanguageFunction}>Html</button>
                    <br />
                    <button type="submit" id="submitProject">Add Project</button>
                </form>

            </div>
        </div>

    )
}


/* # this code creates the form structure.
   # the functions for language handler are hooks that are stored in a variable and called at the click events.*/