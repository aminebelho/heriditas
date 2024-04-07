import React from 'react';
import Heriditas from '../assets/heriditas_logo.jpg'

const Home = () => {
  return (
    <div className="home flex items-center min-h-full mb-10 md:mb-0 sm:pb-2 pt-global-header md:pb-8 relative z-10 md:grid md:items-center md:min-h-[720px] lg:min-h-[780px] md:max-h-[90dvh] mx-auto overflow-hidden bg-cover [@media(min-width:711px)]">
        <div className='std w-4/5'>
          <img className='w-full md:w-2/5 lg:w-1/3 md:max-w-2/5 lg:max-w-1/3' src={Heriditas} alt=''/>
        </div>
      </div>
  );
};

export default Home;