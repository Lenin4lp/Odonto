import React from "react";

const ServiceCard2 = ({ imgSrc, title }) => {
  return (
    <div className=" hover:shadow-none duration-500 border-[1px] border-[#DFBB0B] bg-gradient-to-r from-[#ffff] block shadow-xl to-[#e9e9e9] p-3 rounded-lg">
      <div className="p-1 flex justify-center items-center opacity-50">
        <img
          className=" rounded-lg  w-full object-cover"
          src={imgSrc}
          alt="imgdiag"
        />
      </div>
      <div className="flex sm:my-2 justify-center h-[40px] items-center">
        <h1 className="text-sm text-center font-semibold">{title}</h1>
      </div>
      <div className="flex mt-2 sm:mt-5 justify-center items-center">
        <button className="bg-[#DFBB0B] text-[12px] sm:text-sm w-[200px] text-black py-2 px-4 rounded-lg hover:bg-[#ebd150] duration-500">
          Descubrir más
        </button>
      </div>
      <div className="flex my-5 justify-center items-center">
        <button className="border-[#DFBB0B] text-[12px] sm:text-sm gap-3 w-[200px] border-[1px] flex justify-center items-center text-black py-2 px-4 rounded-lg hover:bg-[#ebd150] duration-500">
          <h1>Cotizar servicio</h1>
          <svg
            className=" h-[20px] w-[20px] fill-black"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
              <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard2;
