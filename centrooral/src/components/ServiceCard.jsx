import React from "react";

const ServiceCard = ({ name, image, description }) => {
  return (
    <div className=" flex justify-center items-center bg-white h-[264px] w-[220px] sm:h-[300px] sm:w-[250px] rounded-lg relative">
      <div className=" absolute top-0 h-full w-full bg-white rounded-lg opacity-0 hover:opacity-100 duration-500 flex justify-center items-center">
        <div className=" m-2 sm:m-3">
          <h1 className=" text-[12px] sm:text-sm text-justify m-2 font-semibold">
            {description}
          </h1>
        </div>
      </div>
      <div className=" grid h-full w-full grid-rows-5 m-2">
        <div className=" row-span-3 h-full flex justify-center items-end">
          {image}
        </div>
        <div className=" h-full row-span-2 flex justify-center items-center">
          <h1 className=" text-center text-sm sm:text-base font-semibold px-5">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
