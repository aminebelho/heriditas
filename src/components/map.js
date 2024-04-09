import React from "react";

const MapComponent = () => {
  return (
    <div className="p-4 globe relative z-10 bg-black bg-opacity-90 mt-2xl pb-2xl text-white overflow-hidden md:overflow-visible">
      <div className="title text-2xl text-center tracking-widest uppercase p-2">
        Carte
      </div>
        <div className="p-4">
          <div className="flex justify-center p-2">
            <iframe
              className="w-full h-96 max-w-full rounded-lg sm:rounded-xl sm:p-2 p-1"
              src="https://www.google.com/maps/d/u/0/embed?mid=1gd7Ybp40pHzH9sXeDpK_8skwPPs7FWA&amp;ehbc=2E312F&amp;noprof=1"
            ></iframe>
          </div>
      </div>
    </div>
  );
};

export default MapComponent;
