import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="mt-8 text-base leading-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Heriditas. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
