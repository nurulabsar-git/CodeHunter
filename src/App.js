import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Components/HomeComponents/HomePage/HomePage';
import Header from './Components/HomeComponents/Header/Header';
function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
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
