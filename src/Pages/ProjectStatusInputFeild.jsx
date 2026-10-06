

export const ProjectStatusInputFeild (props){

  

  return (
    <div>
      <select
                        id="status"
                        name="status"
                        required


                    >  <option value="">Select Status</option>
                        <option value="Complete">Complete</option>
                        <option value="Incomplete">Incomplete</option>
                        <option value="Pending">Pending</option>

                    </select>
    </div>
  )
}


