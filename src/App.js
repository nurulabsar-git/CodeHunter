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
      <Switch>
        <Router>
           <Route path="/">
             <HomePage></HomePage>
           </Route>
        </Router>
      </Switch>
    </div>
  );
}

export default App;
