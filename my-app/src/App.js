// import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar'; 
import {RightNav} from './Components/RightNav';
import {Blogprev} from './Components/Blogprev';
import { UserProfile } from './Components/ProfilePageComponents/UserProfile';
import { BlogForm } from './Components/BlogForm';
import { ProfileRightNav } from './Components/ProfilePageComponents/ProfileRightNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function App() {
  
  return (
    <>
    <Router>
      <Navbar title="Blog Website"/>
      <Switch>
        <Route exact path='/' render={()=>{
          return(
            <>
              <Blogprev/>
              <RightNav />
            </>
            )
          }}>
        </Route>
        <Route exact path='/new-blog' render={()=>{
          return(
            <>
              <BlogForm/>
              <RightNav />
            </>
            )
          }}>
        </Route>
        <Route exact path='/profile' render={()=>{
          return(
            <>
              {/* <BlogForm/> */}
              <UserProfile></UserProfile>
              <RightNav/>  
            </>
          )
        }}></Route>
      </Switch>
      
    </Router>
    </>
 
  );
}

export default App;
