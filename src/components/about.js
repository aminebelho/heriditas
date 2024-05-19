import React from "react";
import { useTranslation } from "react-i18next";


const About = () => {
const { t } = useTranslation();

  return (
    <div className="p-4 globe relative z-10 bg-black bg-opacity-90 mt-2xl pb-2xl text-white overflow-hidden md:overflow-visible">
      <div className="text-2xl text-center tracking-widest uppercase p-2">
        à propos
      </div>
      <div className="p-4">
        <div className="flex justify-center p-2">
          <p className="flex justify-center text-gray-300 text-base sm:text-lg px-4 py-2 sm:px-24">
            {t("patriot_studio_mission")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
