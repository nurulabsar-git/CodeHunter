import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Components/HomeComponents/HomePage/HomePage';
import Header from './Components/HomeComponents/Header/Header';
import Courses from './Components/HomeComponents/Shop/Courses/Courses';
import CourseDetails from './Components/HomeComponents/Shop/Courses/CourseDetails';
function App() {
  return (
    <div>
     <Router>
       <Header/>
     <Switch>
        <Route exact path="/">
           <HomePage/>
        </Route>
        <Route path="/courses">
            <Courses/>
        </Route>
        <Route path="/courseDetails/:courseId">
            <CourseDetails/>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
