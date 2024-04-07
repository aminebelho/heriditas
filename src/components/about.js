import React from "react";

const About = () => {
  return (
    <div className="p-4 globe relative z-10 bg-black bg-opacity-90 mt-2xl pb-2xl text-white overflow-hidden md:overflow-visible">
      <div className="title text-2xl text-center tracking-widest uppercase p-2">
        à propos
      </div>
      <div className="about">
        <div className="p-4">
          <div className="flex justify-center p-2">
            <p className="flex justify-center text-gray-300 text-base sm:text-lg px-4 py-2 sm:px-24 sm:px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae commodo ipsum. Integer dapibus, nunc eget luctus auctor,
              magna erat congue erat, non molestie justo neque auctor justo.
              Morbi tempus ligula at diam pulvinar, ullamcorper pellentesque
              nibh varius. Nunc nec orci ipsum. Donec elementum molestie nisi,
              vitae eleifend massa ullamcorper nec. Sed venenatis at arcu a
              semper. Donec imperdiet ultrices diam sit amet aliquam. Cras
              commodo ac risus ultrices dapibus. Praesent interdum, urna eu
              varius fringilla, neque nisi sagittis nulla, et tristique est
              magna sed quam. Donec vestibulum vehicula faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
