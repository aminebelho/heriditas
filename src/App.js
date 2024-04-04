import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
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
      <div className="second-section ">
        <Contact></Contact>
      </div>  
      {/* <section className="third-section">
        <Contact></Contact>  
      </section>   */}
    </div>
    
  );
}

export default App;
