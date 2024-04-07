import React from "react";
import { Link } from "react-router-dom";
import Prj1 from "../assets/prj1.jpg";
import Prj2 from "../assets/prj2.jpg";
import Prj3 from "../assets/prj3.jpg";

const projects = [
  {
    name: "Projet de numérisation de la mosquée El-Wartalani (ex église Sainte Marcienne)",
    img: Prj1,
    description: "",
  },
  {
    name: "Projet de numérisation de la mosquée Jamaa El-Jedid (mosquée hanafite d'Alger)",
    img: Prj2,
    description: "",
  },
  {
    name: "Projet de numérisation de la mosquée Jamaa El-Kebir (mosquée malekite d'Alger)",
    img: Prj3,
    description: "",
  },
];

const Projects = () => {
  return (
    <div className="p-4 globe relative z-10 bg-black bg-opacity-90 mt-2xl pb-2xl text-white overflow-hidden md:overflow-visible">
      <div className="title text-2xl text-center tracking-widest uppercase p-2">
        Projets
      </div>
      <div className="prj grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={{
              pathname: `/project/${index}`,
              state: { projectData: project }, // Pass project data as state
            }}
          >
            <div className="... sm:text-lg p-4 sm:px-24 sm:px-4">
              <img
                src={project.img}
                alt=""
                className="object-cover object-center w-full h-64 max-w-full rounded-lg sm:rounded-xl sm:p-2 p-1 scale-100 hover:scale-100 ease-in ease-out duration-300 hover:sm:scale-110 cursor-pointer"
              />
              <div className="flex justify-center text-lg text-gray-300 sm:p-2 px-4 py-2">
                {project.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
