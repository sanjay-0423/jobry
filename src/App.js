import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from "./components/Footer";
import Home from './containers/Home';
import Login from './containers/Login';

import ScrollToTop from "./components/ScrollToTop";
import Signup from "./containers/Signup";
import Contactus from "./containers/Contactus";
import JobListPage from "./containers/JobListPage";
import JobDetailPage from "./containers/JobDetailPage";
import ProfileInfo from "./containers/ProfileInfo";
import ChangePassword from "./containers/ChangePassword";
import JobPost from "./containers/JobPost";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/colors.css';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <div className='theme-layout'>
            <Header />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/post-a-job">
                <JobPost />
              </Route>
              <Route path="/profileinfo">
                <ProfileInfo />
              </Route>
              <Route path="/changepassword">
                <ChangePassword />
              </Route>
              <Route path="/contact">
                <Contactus />
              </Route>
              <Route path="/jobs">
                <JobListPage />
              </Route>
              <Route path="/job">
                <JobDetailPage />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
