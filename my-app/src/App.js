// import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar'; 
import {RightNav} from './Components/RightNav';
import {Blogprev} from './Components/Blogprev';
import { BlogForm } from './Components/BlogForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar title="Blog Website"/>
      <Switch>
        <Route exact path='/' component={Blogprev}>
        </Route>
        <Route exact path='/new-blog' component={BlogForm}>
          
        </Route>
      </Switch>
      <RightNav />
    </Router>
    </>
  );
}

export default App;
