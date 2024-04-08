import React from "react";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import Prj1 from "../assets/prj1.jpg";
import Prj2 from "../assets/prj2.jpg";
import Prj3 from "../assets/prj3.jpg";
import mosquee_la_pecherie_3d from "../components/3d/mosquee_la_pecherie_3d";
import Jamaa_el_jedid_360_tour from "../components/360v/jamaa_el_jedid_360";

const navigation = [
  {
    name: "Effectuer une visite 3D",
    href: "#",
    sectionID: "3d",
    current: false,
  },
  {
    name: "Effectuer une visite 360",
    href: "#",
    sectionID: "360v",
    current: false,
  },
];

function ProjectDetails() {
  const params = useParams();

  let projectData = null;

  switch (params.id) {
    case "0":
      projectData = {
        name: "Mosquée El-Wartalani (ex-église Sainte Marcienne)",
        img: Prj1,
        description:
          "In the quiet embrace of dawn, birdsongs weave through the morning air, whispering secrets to the waking world. Nature's symphony orchestrates the beginning of another day, alive with possibility.",
        v3d: mosquee_la_pecherie_3d,
      };
      break;

    case "1":
      projectData = {
        name: "Mosquée Jamaa El-Jedid (mosquée hanafite d'Alger)",
        img: Prj2,
        description: "voici la description de ce projet eidnsjxds uineoin iuen",
        v3d: mosquee_la_pecherie_3d,
        v360: Jamaa_el_jedid_360_tour,
      };
      break;

    case "2":
      projectData = {
        name: "Mosquée Jamaa El-Kebir (mosquée malekite d'Alger)",
        img: Prj3,
        description: "this is the description of the project",
        v3d: mosquee_la_pecherie_3d,
      };
      break;

    default:
      break;
  }

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
        <div className="bg-black bg-opacity-90 p-2 sm:p-4" id="3d">
          <div className="text-xl sm:text-2xl text-start sm:text-center text-gray-300 sm:p-8 p-4">
            Visite 3D du Projet de numérisation "{projectData.name}"
          </div>
          {projectData.v3d && <projectData.v3d />}
        </div>
        <div className="bg-black bg-opacity-90 p-2 sm:p-4" id="360v">
          {projectData.v360 && (
            <div>
              <div className="text-xl sm:text-2xl text-start sm:text-center text-gray-300 sm:p-8 p-4">
                Visite 360 du Projet de numérisation "{projectData.name}"
              </div>
              <projectData.v360 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
