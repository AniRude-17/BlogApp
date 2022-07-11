// import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar'; 
import {RightNav} from './Components/RightNav';
import {Blogprev} from './Components/Blogprev';
import { UserProfile } from './Components/Rightnav-Components/UserProfile';
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
        <Route exact path='/new-blog' render={()=>{
          return(
            <BlogForm/>
            )
          }}>
        </Route>
        <Route exact path='/user-profile' component={UserProfile}>

        </Route>
      </Switch>
      <RightNav />
    </Router>
    </>
 
  );
}

export default App;
