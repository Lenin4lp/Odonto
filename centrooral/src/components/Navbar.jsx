import React, { useEffect, useState } from "react";
function Navbar() {
  let [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  let Links = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/Nosotros" },
    { name: "Servicios", link: "/Servicios" },
    { name: "Contacto", link: "/Contacto" },
  ];
  return (
    <div className="font-sans block w-screen fixed top-0 z-50">
      <div className=" h-[15px]  flex justify-start bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb] opacity-80 items-center">
        <div className=" p-2 lg:p-3 text-[8px] sm:text-[13px] ">
          Lunes a Viernes: 9 AM - 19 PM / Sábados: 09 AM - 14 PM
        </div>
      </div>
      <div className="flex h-[70px] sm:h-[85px] items-center justify-between sm:justify-between md:bg-opacity-45 bg-black py-4 md:px-10 sm:px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white w-fit"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          <img
            className=" hidden sm:block h-[60px] w-auto object-contain"
            src="home.png"
            alt=""
          />
          <img
            className=" block sm:hidden h-[60px] w-auto object-contain"
            src="centlogo.png"
            alt=""
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="relative z-50 text-3xl pr-5 lg:top-[80px] cursor-pointer md:hidden"
        >
          <button className="flex  items-center space-x-2 focus:outline-none">
            <div className="w-6 flex  items-center justify-center relative">
              <span
                className={`transform transition bg-white w-full h-px absolute ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              ></span>

              <span
                className={`transform transition w-full h-px bg-white absolute ${
                  open ? "opacity-0 translate-x-3" : "opacity-100"
                }`}
              ></span>

              <span
                className={`transform transition w-full h-px bg-white absolute ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>

        <ul
          className={`fixed inset-x-0 top-[85px] bottom-0 z-40 flex flex-col bg-black  px-10 pt-5 transition-all duration-300 md:static md:z-auto md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0 ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-4 opacity-0 pointer-events-none md:visible md:translate-y-0 md:opacity-100 md:pointer-events-auto"
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
