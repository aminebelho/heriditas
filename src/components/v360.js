import React from "react";

function ThreeSixtySection({ projectData }) {
  return (
    <div className="bg-black bg-opacity-90 p-2 sm:p-4" id="360v">
      <div className="text-xl sm:text-2xl text-start sm:text-center text-gray-300 sm:p-8 p-4">
        Visite 360 du Projet de numérisation "{projectData.name}"
      </div>
      <div className=" sm:px-28 px-4 sm:py-8 py-4 sm:h-96 h-52">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src={projectData.v360}
        ></iframe>
      </div>
    </div>
  );
}

export default ThreeSixtySection;
