
import React, { createContext } from 'react'
import AddEmployee from './AddEmployee'
import Employees from './Employees'
const totalEmployees = ["hello"]
export const EmployeeContxt = createContext(totalEmployees)



export default  function Home(props) {
 
  return (
     
    <EmployeeContxt.Provider value ={totalEmployees}>
    
  {props.children}

    </EmployeeContxt.Provider>
  
  )
}

