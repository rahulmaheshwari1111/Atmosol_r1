import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom'
import Home from './component/Home';
import AddEmployee from './component/AddEmployee';


function App() {   

  return (
      <div className="container">
          <Router>
              <div className="col-md-12">
                  <h1 className="text-center" style={style}> List of Employees</h1>
                

               <Link to = '/add'>  <button> Add Employee</button></Link>
                  <Switch>
                      <Router>
                      <Route path="/" exact component={Home} />
                      <Route path="/add" component={AddEmployee} />
                      </Router>
                 
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
