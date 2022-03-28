import React, { useContext,useReducer } from 'react'
import { EmployeeContxt } from './Home'
import formReducer from './formReducer'



const initialState = {
    FirstName: "",
    LastName:"",
    DOB:"",
    imageLink:"",
    experience:""
}

export default function AddEmployee(props) {
const [formState,dispatch] = useReducer(formReducer, initialState)
//    console.log(props,"props")
const Employees = useContext(EmployeeContxt)
console.log(Employees,"asads")

    function handleChange(e){

 dispatch({
     type:'HANDLE_INPUT',
     field:e.target.name,
     payload:e.target.value
 })

 console.log(formState)



    }


    const addnewEmployee =(e)=>{
        e.preventDefault()
       Employees.push(...formState)
      
    }


  return (
    <div>

<h1>Add A employee</h1>
<form>

<input placeholder='First Name' name ="FirstName" value = {formState.FirstName} onChange = {(e)=>handleChange(e)} />
<input placeholder='Last Name' name ="LastName" value = {formState.LastName} onChange = {(e)=>handleChange(e)} />
<input placeholder='DOB' name ="DOB" value = {formState.DOB} onChange = {(e)=>handleChange(e)} />
<input placeholder='ImageLink' name ="imageLink" value = {formState.imageLink} onChange = {(e)=>handleChange(e)} />
<input placeholder='Experience' name="experience" value = {formState.experience} onChange = {(e)=>handleChange(e)} />


<button onClick ={(e)=>addnewEmployee}> Submit</button>
</form>

    </div>
  )
}
