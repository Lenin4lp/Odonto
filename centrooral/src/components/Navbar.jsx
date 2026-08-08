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
    <div className="font-sans block w-screen fixed top-0 z-50">
      <div className=" h-[15px]  flex justify-start bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb] opacity-80 items-center">
        <div className=" p-2 lg:p-3 text-[10px] sm:text-[13px] ">
          Lunes a Viernes: 9 AM - 19 PM / Sábados: 09 AM - 14 PM
        </div>
      </div>
      <div className="md:flex h-[85px] items-center justify-between bg-opacity-45 bg-black py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white w-fit"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          <img
            className=" h-[60px] w-auto object-contain"
            src="home.png"
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[100px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base  md:my-0 my-7">
              <a
                relative="route"
                href={link.link}
                className="text-white hover:text-[#DFBB0B] duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
