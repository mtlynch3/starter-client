import "./App.css";
import Error404Page from "./pages/error_404/error_page";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/home";
import CampusesPage from "./pages/campuses";
import CampusDetailPage from "./pages/campus_detail";
import StudentsPage from "./pages/students/index";
import StudentDetailPage from "./pages/student_detail";
import CreateStudentPage from "./pages/create_student";
import {AlertQueueContextProvider} from './context/alert'
import CreateCampusPage from "./pages/create_campus";

const App = () => {
  return (
    <AlertQueueContextProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/campuses" component={CampusesPage} />
          <Route exact path="/campuses/create" component={CreateCampusPage} />
          <Route exact path="/campus/:id" component={CampusDetailPage} />
          <Route exact path="/students" component={StudentsPage} />
          <Route exact path="/students/create" component={CreateStudentPage} />
          <Route exact path="/student/:id" component={StudentDetailPage} />
          <Route exact path="/error/404" component={Error404Page} />
          <Redirect to="/error/404" />
        </Switch>
      </div>
    </AlertQueueContextProvider>
  );
};

export default App;
