
import React, { createContext } from 'react'
import AddEmployee from './AddEmployee'
import Employees from './Employees'

export const EmployeeContxt = createContext()



export default  function Home() {
    const totalEmployees = ["hello"]
  return (
     
    <EmployeeContxt.Provider value ={totalEmployees}>
    
    <AddEmployee/>
   <Employees/> 

    </EmployeeContxt.Provider>
  
  )
}

