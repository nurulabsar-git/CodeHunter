import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Components/HomeComponents/HomePage/HomePage';
function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
        <Route exact path="/">
           <HomePage/>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
