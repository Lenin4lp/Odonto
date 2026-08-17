import React from "react";

const ServiceCard = ({ name, image, description }) => {
  return (
    <div
      className="group h-[264px] w-[220px] [perspective:1000px] sm:h-[300px] sm:w-[250px]"
      tabIndex={0}
      aria-label={`${name}: gira la tarjeta para ver la descripción`}
    >
      <div className="relative h-full w-full rounded-lg transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 grid h-full w-full grid-rows-5 rounded-lg bg-white shadow-lg p-2 [backface-visibility:hidden]">
          <div className="row-span-3 flex h-full items-end justify-center">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-lg opacity-70 object-cover"
            />
          </div>
          <div className="row-span-2 flex h-full items-center justify-center">
            <h1 className="px-5 text-center text-sm font-semibold sm:text-base">
              {name}
            </h1>
          </div>
        </div>

        <div className="absolute inset-0 flex h-full w-full items-center justify-center rounded-lg bg-white p-2 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-3">
          <h1 className="m-2 text-justify text-[12px] font-semibold sm:text-sm">
            {description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
