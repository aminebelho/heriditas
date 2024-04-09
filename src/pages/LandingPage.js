import React, { useState, useEffect, useRef } from 'react';
import im1 from '../assets/image1.jpg';
import im2 from '../assets/image2.jpg';
import im3 from '../assets/image3.jpg';
import im4 from '../assets/image4.jpg';
import im5 from '../assets/image5.jpg';
import Navbar from '../components/navbar'
import Home from '../components/home'
import Projects from '../components/projects';
import Contact from '../components/contact'
import About from '../components/about';
import { navigationData } from '../navigationData';
import MapComponent from '../components/map';

const images = [im1, im2, im3, im4, im5];

const navigation = navigationData

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const BackgroundChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState(getRandomImage());
  const appRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newImage = getRandomImage();
      setBackgroundImage(newImage);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Set the height of the background container to match the height of the App component
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.target === appRef.current) {
          const height = entry.contentRect.height;
          document.documentElement.style.setProperty('--background-height', `${height}px`);
        }
      }
    });

    resizeObserver.observe(appRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      className="bg-lazy bg-cover bg-center top-0 left-0 w-full"
      style={{ backgroundImage: `url(${backgroundImage})`, height: 'var(--background-height, auto)' }}
    >
      <div ref={appRef}>
          <Navbar navigation={navigation}></Navbar>
          <div className=" h-screen backdrop-blur-md min-h-screen" id='home'>
            <Home></Home>
          </div>
          <div  id='projects'>
            <Projects></Projects>
          </div>
          <div className='mt-20' id='carte'>
            <MapComponent></MapComponent>
          </div>
          <div className="mt-20 " id='about'>
            <About></About>
          </div> 
          <div className="mt-20 " id='contact'>
            <Contact></Contact>
          </div>
      </div>
    </div>
  );
};

function LandingPage() {
  return (
    <div className="relative">
      <BackgroundChanger />
    </div>
  );
}

export default LandingPage;
