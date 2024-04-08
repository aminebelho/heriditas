import React from "react";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import projectsData from "../projectsData";
import { extraNavigationData } from "../navigationData";

const navigation = extraNavigationData

function ProjectDetails() {
  const params = useParams();

  const projectData = projectsData.find(project => project.id === params.id);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);

  return (
    <div className="h-screen">
      <div className="bg-lazy bg-cover bg-center top-0 left-0 w-full h-full">
        <div className="navbar">
          <Navbar
            navigation={navigation.filter((item) => {
              if (item.sectionID === "3d" && !projectData.v3d) {
                return false;
              }
              if (item.sectionID === "360v" && !projectData.v360) {
                return false;
              }
              return true;
            })}
          />
        </div>
        <div
          className="flex justify-start items-center min-h-full sm:pb-2 pt-global-header md:pb-8 relative z-10 md:grid md:items-center md:min-h-[720px] lg:min-h-[780px] md:max-h-[90dvh] mx-auto overflow-hidden bg-cover [@media(min-width:711px)]"
          style={{
            backgroundImage: `url(${projectData.img})`,
            height: "100vh",
            backgroundSize: "cover", // Set background size to cover
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div className="w-4/5 sm:w-4/5 bg-black bg-opacity-60 rounded-r-lg  text-white px-4 py-2 sm:px-16 sm:py-8">
            <div className="text-xl mb-5">{projectData.name}</div>
            <div>{projectData.description}</div>
          </div>
        </div>
        {projectData.v3d && ( // Conditional rendering of 360 section
          <div className="bg-black bg-opacity-90 p-2 sm:p-4" id="3d">
            <div className="text-xl sm:text-2xl text-start sm:text-center text-gray-300 sm:p-8 p-4">
              Visite 3d du Projet de numérisation "{projectData.name}"
            </div>
            <div className=" sm:px-28 px-4 sm:py-4 py-2 sm:h-96 h-52">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src={projectData.v3d}
              ></iframe>
            </div>
          </div>
        )}
        {projectData.v360 && ( // Conditional rendering of 360 section
          <div className="bg-black bg-opacity-90 p-2 sm:p-4" id="360v">
            <div className="text-xl sm:text-2xl text-start sm:text-center text-gray-300 sm:p-8 p-4">
              Visite 360 du Projet de numérisation "{projectData.name}"
            </div>
            <div className=" sm:px-28 px-4 sm:py-4 py-2 sm:h-96 h-52">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src={projectData.v360}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;
