import React from "react";
import Footer from "./footer";
import SocialMedia from "../socialMediaData";

const socialMediaData = SocialMedia

const Contact = () => {
  return (
    <div className="p-4 globe relative z-10 bg-black bg-opacity-90 mt-2xl pb-2xl text-white overflow-hidden md:overflow-visible">
      <div className="text-2xl text-center tracking-widest uppercase p-2">
        Contacts
      </div>
        <div className="p-4">
          <div className="flex justify-center text-center text-gray-300 text-base sm:text-lg ">Suivez nous sur nos réseaux sociaux !</div>
          <div className="flex justify-center p-2 space-x-6 mb-8">
            {socialMediaData.map((socialMedia, index) => (
              <a
                href={socialMedia.url} 
                key={index}
                className="text-gray-400 hover:text-gray-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                  {socialMedia.svg}
                </span>
              </a>
            ))}
          </div>
          <Footer></Footer>
        </div>
    </div>
  );
};

export default Contact;
