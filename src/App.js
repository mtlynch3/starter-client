import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  AddStudentContainer,
  AddCampusContainer,
  AddStudentAllStudentContainer,
} from "./components/containers";
import EditCampusView from "./components/views/EditCampusView";
import EditStudentView from "./components/views/EditStudentView";
// if you create separate components for adding/editing
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/addcampus" component={AddCampusContainer} />
        <Route
          exact
          path="/campus/:id/addstudent"
          component={AddStudentContainer}
        />
        <Route
          exact
          path="/addstudent"
          component={AddStudentAllStudentContainer}
        />
        <Route exact path="/editcampus" component={EditCampusView} />
        <Route exact path="/editstudent" component={EditStudentView} />
      </Switch>
    </div>
  );
};

export default App;
