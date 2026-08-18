import React from "react";

const ToothIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-3.5 w-3.5 shrink-0 fill-[#DFBB0B] sm:h-4 sm:w-4"
  >
    <path d="M7.2 2C4.4 2 2.5 4.2 2.5 7.1c0 2.1.9 3.8 1.7 5.3.7 1.3 1.3 2.5 1.5 4.2.3 2.9 1 5.4 2.7 5.4 1.3 0 1.8-1.7 2.3-3.5.4-1.4.7-2.4 1.3-2.4s.9 1 1.3 2.4c.5 1.8 1 3.5 2.3 3.5 1.7 0 2.4-2.5 2.7-5.4.2-1.7.8-2.9 1.5-4.2.8-1.5 1.7-3.2 1.7-5.3C21.5 4.2 19.6 2 16.8 2c-1.5 0-2.6.5-3.5.9-.6.3-1 .5-1.3.5s-.7-.2-1.3-.5C9.8 2.5 8.7 2 7.2 2Z" />
  </svg>
);

const ServiceCard = ({
  name,
  image,
  description,
  isFlipped,
  onFlip,
  cardId,
}) => {
  return (
    <div
      data-service-card-id={cardId}
      className="h-[264px] w-[220px] [perspective:1000px] sm:h-[300px] sm:w-[250px]"
    >
      <div
        className={`relative h-full w-full rounded-lg transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 grid h-full w-full grid-rows-5 rounded-lg bg-white shadow-lg p-2 [backface-visibility:hidden]">
          <div className="row-span-3 flex h-full items-end justify-center">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-lg opacity-70 object-cover"
            />
          </div>
          <div className="row-span-2 flex h-full flex-col items-center justify-center gap-3">
            <h1 className="px-5 text-center text-sm font-semibold sm:text-base">
              {name}
            </h1>
            <button
              type="button"
              onClick={onFlip}
              aria-expanded={isFlipped}
              className="rounded-lg bg-[#DFBB0B] px-4 py-2 text-xs font-semibold text-black transition-colors duration-300 hover:bg-[#ebd150] sm:text-sm"
            >
              Ver más
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex h-full w-full flex-col rounded-lg bg-white px-3 py-3 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-4 sm:py-4">
          <h2 className="mb-2 border-b border-[#DFBB0B] pb-2 text-center text-xs font-bold leading-tight sm:text-sm">
            {name}
          </h2>
          <ol className="flex min-h-0 flex-1 flex-col justify-evenly gap-1">
            {description.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-1.5 text-[11px] font-medium leading-tight text-gray-800 sm:text-xs"
              >
                <ToothIcon />
                <span>
                  <span className="font-bold text-[#9a7e00]">{index + 1}.</span>{" "}
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
