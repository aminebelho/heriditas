import React from "react";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import projectsData from "../projectsData";
import { extraNavigationData } from "../navigationData";
import ThreeSixtySection from "../components/v360";
import ThreeDSection from "../components/v3d";
import Footer from "../components/footer";

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
        <ThreeDSection projectData={projectData} />
        )}
         {projectData.v360 && (
          <ThreeSixtySection projectData={projectData} /> // Use the new component
        )}
        <div className="p-4 globe relative z-10 bg-black bg-opacity-90 mt-2xl pb-2xl text-white overflow-hidden md:overflow-visible">
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
