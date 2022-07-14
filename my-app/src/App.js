// import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar'; 
import {RightNav} from './Components/RightNav';
import {Blogprev} from './Components/Blogprev';
import { UserProfile } from './Components/Rightnav-Components/UserProfile';
import { BlogForm } from './Components/BlogForm';
import { ProfileRightNav } from './Components/Profile-Page-Components/ProfileRightNav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Blogpage_Rightnav } from './Components/Blogpage_Rightnav';
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
              <ProfileRightNav/>  
            </>
          )
        }}></Route>



        <Route exact path='/ReadMore' render={()=>{
          return(
            <>
              <Blogpage_Rightnav />
            </>
          )
        }}></Route>



        
      </Switch>
      
    </Router>
    </>
 
  );
}

export default App;
