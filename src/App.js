import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Projects from './components/projects/projects';
import Contact from './components/contact/contact'
import About from './components/about/about';



function App() {
  return (
    <div className="App relative">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="first-section h-screen backdrop-blur-md" id='home'>
        <Home></Home>
      </div>
      <div className='second-section' id='projects'>
        <Projects></Projects>
      </div>
      <div className="third-section mt-20 " id='about'>
        <About></About>
      </div> 
      <div className="fourth-section mt-20 " id='contact'>
        <Contact></Contact>
      </div>  
    </div>
    
  );
}

export default App;
