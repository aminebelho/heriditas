import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Projects from './components/projects/projects';
import Contact from './components/contact/contact'



function App() {
  return (
    <div className="App relative">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="first-section h-screen backdrop-blur-md ">
        <Home></Home>
      </div>
      <div className='second-section'>
        <Projects></Projects>
      </div>
      <div className="third-section mt-20 ">
        <Contact></Contact>
      </div>  
    </div>
    
  );
}

export default App;
