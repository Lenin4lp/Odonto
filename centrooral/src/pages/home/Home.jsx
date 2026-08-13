import React from "react";
import ServiceCard2 from "../../components/ServiceCard2";

function Home() {
  const services = [
    {
      type: "Diseño de sonrisa",
      includedServices: [
        "Implantes dentales",
        "Carillas y coronas dentales",
        "Blanqueamiento dental",
        "Diseño de sonrisa digital",
      ],
    },
    {
      type: "Rehabilitación oral",
      includedServices: [
        "Tecnología CAD-CAM en computadora",
        "Rehabilitación oral CAD-CAM",
      ],
    },
    {
      type: "Ortodoncia",
      includedServices: ["Ortodoncia Metálica", "Ortodoncia Estética"],
    },
    {
      type: "Otros",
      includedServices: [
        "Endodoncia",
        "Periodoncia",
        "Odontopediatria",
        "Cirugía Oral",
        "Sonrisa de Halloween",
      ],
    },
  ];

  return (
    <div className=" font-sans h-fit block justify-center items-center">
      <div className=" bg-cover block  relative">
        <div className=" h-screen z-10 w-screen absolute bg-white/10"></div>
        <div className="absolute bottom-[20px] xl:bottom-[60px] z-30 h-fit w-screen">
          <div className=" flex justify-center items-center">
            <div className=" grid grid-cols-3 gap-5 md:gap-10">
              <button
                type="button"
                aria-label="Facebook"
                className="shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 cursor-pointer hover:scale-110 duration-300 p-3 lg:p-5 rounded-full w-fit bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]"
              >
                <div className=" flex justify-center items-center">
                  <svg
                    className="pointer-events-none h-[25px] fill-[#DFBB0B] "
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>facebook</title>{" "}
                      <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"></path>{" "}
                    </g>
                  </svg>
                </div>
              </button>
              <button
                type="button"
                aria-label="Instagram"
                className="shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 p-3 lg:p-5 rounded-full cursor-pointer hover:scale-110 duration-300 w-fit bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]"
              >
                <div className=" flex justify-center items-center">
                  <svg
                    className="pointer-events-none h-[25px] "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
                        className="fill-[#DFBB0B]"
                      />{" "}
                    </g>
                  </svg>
                </div>
              </button>
              <button
                type="button"
                aria-label="TikTok"
                className="shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 p-3 lg:p-5 cursor-pointer hover:scale-110 duration-300 rounded-full w-fit bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]"
              >
                <svg
                  className="pointer-events-none h-[25px]  fill-[#DFBB0B]"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>tiktok</title>{" "}
                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" absolute top-[100px] lg:top-[130px] overflow-hidden mx-5 m-10 md:m-14 md:mx-14  lg:mx-20 w-screen left-0 flex z-20 justify-start items-start">
          <div className=" grid grid-cols-3 ">
            <div className=" block col-span-2">
              <h1 className=" text-sm md:text-base lg:text-lg text-white">
                Tu sonrisa,
              </h1>
              <h1 className=" text-sm md:text-base lg:text-lg text-[#DFBB0B] font-semibold">
                nuestra especialidad
              </h1>
              <h1 className=" pt-10 font-bold text-base sm:text-lg md:text-xl lg:text-2xl  text-white">
                Descubre la <span className=" text-[#DFBB0B]">magia</span>
              </h1>
              <h1 className=" font-bold text-base sm:text-lg md:text-xl lg:text-2xl  text-white">
                detrás de una <span className=" text-[#DFBB0B]">sonrisa</span>
              </h1>
              <h1 className=" text-3xl md:text-4xl lg:text-5xl font-black text-[#DFBB0B]">
                SALUDABLE
              </h1>
              <div className=" flex justify-start sm:justify-center items-center">
                <button className=" my-5 lg:my-10 text-[11px] md:text-sm lg:text-base p-3 rounded-xl hover:bg-[#e4cc54] duration-300 bg-[#DFBB0B]">
                  Agenda una cita ya!
                </button>
              </div>
            </div>
            <div className=" col-span-1"></div>
          </div>
        </div>
        <div className="">
          <img
            className=" h-screen w-screen object-cover "
            src="Fondoweb.webp"
          ></img>
        </div>
      </div>
      <div className=" h-fit bg-gradient-to-b from-[#f5f5f5] to-[#DFBB0B] block">
        <div className=" border-t-[1px] border-[#DFBB0B] p-5 px-5 sm:px-10">
          <div className=" block">
            <div className="mb-7 mt-2 flex justify-center items-center grow w-full ">
              <div className="  rounded-full  ">
                <img
                  className=" h-[60px] sm:h-[80px]"
                  src="CentroralLogo.png"
                  alt=""
                />
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className=" w-full max-w-[1000px] grow grid h-fit shadow-lg hover:shadow-none duration-300 bg-white gap-5 grid-cols-1 md:grid-cols-3 rounded-lg p-3 ">
                <div className=" md:border-[#DFBB0B] md:border-r-[2px]  grow w-full block p-3 ">
                  <div className=" flex justify-center items-center  opacity-50">
                    <img
                      className=" rounded-lg object-cover w-auto "
                      src="consultorio.webp"
                      alt=""
                    />
                  </div>
                  <div className=" my-2 flex justify-center items-center">
                    <h1 className=" font-semibold text-[12px] sm:text-sm   text-center">
                      Nuestra visión
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className=" text-[12px] sm:text-sm  text-justify">
                      En Centroral nos comprometemos a brindar a nuestros
                      pacientes una atención odontológica integral y de calidad,
                      centrada en la excelencia clínica y el bienestar del
                      paciente. Nuestro objetivo es mejorar la salud bucal de
                      nuestros pacientes, ofreciendo tratamientos innovadores,
                      personalizados y seguros, respaldados por un equipo de
                      profesionales altamente capacitados.
                    </p>
                  </div>
                </div>
                <div className="  grow w-full block p-3 ">
                  <div className=" flex justify-center items-center  opacity-50">
                    <img
                      className=" rounded-lg object-cover   w-auto "
                      src="consultorio.webp"
                      alt=""
                    />
                  </div>
                  <div className=" my-2 flex justify-center items-center">
                    <h1 className=" font-semibold text-[12px] sm:text-sm text-center">
                      Nuestra visión
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className=" text-[12px] sm:text-sm text-justify">
                      En Centro Oral nos comprometemos a brindar a nuestros
                      pacientes una atención odontológica integral y de calidad,
                      centrada en la excelencia clínica y el bienestar del
                      paciente. Nuestro objetivo es mejorar la salud bucal de
                      nuestros pacientes, ofreciendo tratamientos innovadores,
                      personalizados y seguros, respaldados por un equipo de
                      profesionales altamente capacitados.
                    </p>
                  </div>
                </div>
                <div className=" md:border-[#DFBB0B] md:border-l-[2px] grow w-full block p-3 ">
                  <div className=" flex justify-center items-center  opacity-50">
                    <img
                      className=" rounded-lg object-cover   w-auto "
                      src="consultorio.webp"
                      alt=""
                    />
                  </div>
                  <div className=" my-2 flex justify-center items-center">
                    <h1 className=" font-semibold text-[12px] sm:text-sm lg:text-base  text-center">
                      Nuestra visión
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className=" text-[12px] sm:text-sm  text-justify">
                      En Centroral nos comprometemos a brindar a nuestros
                      pacientes una atención odontológica integral y de calidad,
                      centrada en la excelencia clínica y el bienestar del
                      paciente. Nuestro objetivo es mejorar la salud bucal de
                      nuestros pacientes, ofreciendo tratamientos innovadores,
                      personalizados y seguros, respaldados por un equipo de
                      profesionales altamente capacitados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white  relative mt-14 md:mt-20  grow border-y-[2px] border-white  w-full h-fit p-3 block">
          <div className=" flex justify-center items-center w-full">
            <h1 className="  text-sm md:text-lg font-semibold">
              Nuestros servicios
            </h1>
          </div>
          <div className=" flex justify-center items-center gap-1 w-full">
            <div className="h-[1px] w-[70px] bg-[#DFBB0B]"></div>
            <img className=" h-[60px]" src="centlogoyellow.png" alt="" />
            <div className="h-[1px] w-[70px] bg-[#DFBB0B]"></div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 my-5 grow w-full gap-4">
            <ServiceCard2
              imgSrc="diagnostico.webp"
              title="Diagnóstico y prevención"
            />
            <ServiceCard2
              imgSrc="restauracion.webp"
              title="Odontología restauradora"
            />
            <ServiceCard2 imgSrc="estetica.webp" title="Estética dental" />
            <ServiceCard2 imgSrc="ortodoncia.webp" title="Ortodoncia" />
            <ServiceCard2
              imgSrc="odontopediatria.webp"
              title="Odontopediatría"
            />
          </div>
          <div className=" my-5 flex justify-center items-center">
            <button className="bg-[#DFBB0B] text-black py-2 px-4 rounded-lg hover:bg-[#ebd150] duration-500">
              Ver todos los servicios
            </button>
          </div>
        </div>
        <div className=" w-screen bg-black h-fit block">
          <div className=" flex justify-center items-center">
            <div className=" my-10 grid grid-cols-1 sm:grid-cols-3 w-full">
              <div className=" col-span-1 flex justify-center items-center">
                <svg
                  className=" fill-white h-[60px] sm:h-[100px]"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <style type="text/css"> </style>{" "}
                    <g>
                      {" "}
                      <path
                        className="st0"
                        d="M256.004,0c-141.386,0-256,114.622-256,256.008c0,141.369,114.614,255.992,256,255.992 c141.378,0,255.992-114.623,255.992-255.992C511.996,114.622,397.382,0,256.004,0z M353.141,283.328 c-18.067,51.867-30.893,76.078-33.134,87.192c-4.517,22.433-33.126,22.433-39.143-1.406c-3.278-12.936-2.275-59.157-24.859-59.157 c-22.584,0-21.581,46.221-24.859,59.157c-6.017,23.84-34.626,23.84-39.143,1.406c-2.242-11.114-15.067-35.325-33.135-87.192 c-19.853-56.957-19.575-105.134,13.551-128.948c33.134-23.831,59.485-5.621,83.586-5.621c24.109,0,50.46-18.21,83.586,5.621 C372.717,178.195,372.995,226.371,353.141,283.328z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className=" col-span-1 my-5 sm:my-0 flex justify-center items-center">
                <div className=" block text-center text-white">
                  <h1 className=" text-xl sm:text-3xl lg:text-4xl font-semibold">
                    NO TE PIERDAS UN
                  </h1>
                  <h1 className=" text-4xl sm:text-5xl lg:text-6xl text-[#DFBB0B] font-bold">
                    DESCUENTO
                  </h1>
                  <h1 className=" text-lg sm:text-2xl lg:text-3xl font-semibold">
                    DE HASTA
                  </h1>
                  <h1 className=" text-7xl lg:text-8xl text-[#DFBB0B]	 font-bold">
                    15%
                  </h1>
                  <h1 className=" text-base sm:text-xl lg:text-2xl font-bold">
                    EN TU PRIMERA CONSULTA
                  </h1>
                </div>
              </div>
              <div className=" col-span-1 flex justify-center items-center">
                <svg
                  className=" fill-white h-[60px] sm:h-[100px]"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <style type="text/css"> </style>{" "}
                    <g>
                      {" "}
                      <path
                        className="st0"
                        d="M256.004,0c-141.386,0-256,114.622-256,256.008c0,141.369,114.614,255.992,256,255.992 c141.378,0,255.992-114.623,255.992-255.992C511.996,114.622,397.382,0,256.004,0z M353.141,283.328 c-18.067,51.867-30.893,76.078-33.134,87.192c-4.517,22.433-33.126,22.433-39.143-1.406c-3.278-12.936-2.275-59.157-24.859-59.157 c-22.584,0-21.581,46.221-24.859,59.157c-6.017,23.84-34.626,23.84-39.143,1.406c-2.242-11.114-15.067-35.325-33.135-87.192 c-19.853-56.957-19.575-105.134,13.551-128.948c33.134-23.831,59.485-5.621,83.586-5.621c24.109,0,50.46-18.21,83.586,5.621 C372.717,178.195,372.995,226.371,353.141,283.328z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
