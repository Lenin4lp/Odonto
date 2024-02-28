import React, { useState } from "react";
function Navbar() {
  let [open, setOpen] = useState(false);
  let Links = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/Nosotros" },
    { name: "Servicios", link: "/Servicios" },
    { name: "Contacto", link: "/Contacto" },
  ];
  return (
    <div className="font-sans block shadow-md w-screen fixed top-0 z-50">
      <div className=" h-[25px] lg:h-[30px] flex justify-start bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb] items-center">
        <div className=" p-2 lg:p-3 text-[10px] sm:text-[13px] md:text-sm">
          Lunes a Viernes: 9 AM - 19 PM / Sábados: 09 AM - 14 PM
        </div>
      </div>
      <div className="md:flex h-[85px] lg:h-[100px] items-center   justify-between bg-[#ffffff] py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white w-fit"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          <img
            className=" h-[60px] lg:h-[80px] w-auto object-contain"
            src="https://softdeveral.com/odonto/odontologo2.jpeg"
            alt=""
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-[50px] top-[68px] lg:top-[80px] cursor-pointer md:hidden"
        >
          <button className="flex items-center space-x-2 focus:outline-none">
            <div className="w-6 flex items-center justify-center relative">
              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              ></span>

              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  open ? "opacity-0 translate-x-3" : "opacity-100"
                }`}
              ></span>

              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#ffffff] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[100px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base lg:text-lg md:my-0 my-7"
            >
              <a
                relative="route"
                href={link.link}
                className="text-black hover:text-[#DFBB0B] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button
            onClick={() => logout()}
            className=" md:mx-10 p-2 rounded bg-gradient-to-br from-[#25D366] to-[#18793b] text-white hover:from-[#64d18c] hover:to-[#2da559] duration-300"
          >
            <div className=" grid grid-cols-4 md:grid-cols-1 lg:grid-cols-4">
              <div className=" flex justify-center col-span-1">
                <svg
                  className=" h-[30px]"
                  fill="#ffffff"
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
              </div>
              <div className=" col-span-3">
                <div className=" flex md:hidden lg:flex justify-center mt-1 items-center">
                  WhatsApp
                </div>
              </div>
            </div>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
