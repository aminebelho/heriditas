import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import im1 from './assets/image1.jpg';
import im2 from './assets/image2.jpg';
import im3 from './assets/image3.jpg';
import im4 from './assets/image4.jpg';
import im5 from './assets/image5.jpg';

const images = [im1, im2, im3, im4, im5];

const root = ReactDOM.createRoot(document.getElementById('root'));

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const BackgroundChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState(getRandomImage());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newImage = getRandomImage();
      setBackgroundImage(newImage);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="bg-lazy bg-cover bg-center fixed top-0 left-0 w-full h-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  );
};

root.render(<BackgroundChanger />);

reportWebVitals();
