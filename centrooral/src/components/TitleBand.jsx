import React from "react";

const TitleBand = ({ title, color, image, textColor }) => {
  return (
    <div
      className={`h-[100px] sm:h-[150px] lg:h-[200px] ${image}  bg-cover bg-center block relative`}
    >
      <div className={`h-full w-screen ${color} relative`}>
        <h1
          className={`absolute lg:bottom-[75px] right-0 left-0 text-center sm:bottom-[50px] bottom-[30px] ${textColor} text-3xl sm:text-5xl md:text-7xl font-extrabold`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleBand;
