// import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar'; 
import {RightNav} from './Components/RightNav';
import {Blogprev} from './Components/Blogprev';
function App() {
  return (
    <>
      <Navbar title="Blog Website"/>
      <Blogprev />
      <Blogprev />
      <RightNav />
    </>
  );
}

export default App;
