import React from "react";
import Navbar from '../components/navbar'
import { useParams } from "react-router-dom";
import Prj1 from '../assets/prj1.jpg'
import Prj2 from '../assets/prj2.jpg'
import Prj3 from '../assets/prj3.jpg'


const navigation = [
  { name: "Effectuer une visite 3D", href: "#", sectionID: "", current: false },
  { name: "Effectuer une visite 360", href: "#", sectionID: "", current: false }
];




function ProjectDetails() {

const params = useParams()

let projectData = null

    switch (params.id) {
        case "0":
            projectData = {
              name: "Projet de numérisation de la mosquée El-Wartalani (ex église Sainte Marcienne)",
              img: Prj1,
              description: "éf",
            }
            break
        
        case "1":
            projectData = {
              name: "Projet de numérisation de la mosquée El-Wartalani (ex église Sainte Marcienne)",
              img: Prj2,
              description: "n",
            }
            break
        
        default:
            break
    }

    return (
      <div className="relative w-full">
        <div className="navbar">
          <Navbar navigation={navigation}></Navbar>
        </div>
        <div className="p-2">
        <p>The project ID is {params.id}</p>
            {
                projectData != null ?
                <>
                    <img className="h-screen backdrop-blur-md min-h-screen" src={projectData.img}/>

                    <h2>{projectData.name}</h2>
                    <div> {projectData.description}</div>
                </>
                : ''
            }
        </div>
      </div>
    );
  }

export default ProjectDetails;
