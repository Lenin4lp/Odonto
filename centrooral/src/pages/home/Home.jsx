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
        <div className=" w-screen h-fit absolute bottom-[60px]">
          <div className=" flex justify-center items-center">
            <div className=" grid grid-cols-3 gap-10">
              <div className=" shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 hover:cursor-pointer hover:scale-110 duration-300 p-3 sm:p-5 rounded-full w-fit  bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]">
                <div className=" flex justify-center items-center">
                  <svg
                    className="h-[25px] fill-[#DFBB0B] md:h-[35px] "
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
              </div>
              <div className=" shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 p-3 sm:p-5 rounded-full hover:cursor-pointer hover:scale-110 duration-300 w-fit bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]">
                <div className=" flex justify-center items-center">
                  <svg
                    className="h-[25px] md:h-[35px] "
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
              </div>
              <div className=" shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 p-3 sm:p-5 hover:cursor-pointer hover:scale-110 duration-300 rounded-full w-fit  bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]">
                <svg
                  className="h-[25px] md:h-[35px] fill-[#DFBB0B] "
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="-143 145 512 512"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute top-[130px] overflow-hidden mx-5 m-10 md:m-14 md:mx-14 lg:m-20 lg:mx-20 w-screen left-0 flex z-20 justify-start items-start">
          <div className=" grid grid-cols-3 ">
            <div className=" block col-span-2">
              <h1 className=" text-base lg:text-xl text-white">Tu sonrisa,</h1>
              <h1 className=" text-base lg:text-xl text-[#DFBB0B] font-semibold">
                nuestra especialidad
              </h1>
              <h1 className=" pt-10 font-bold text-xl sm:text-2xl lg:text-3xl text-white">
                Descubre la <span className=" text-[#DFBB0B]">magia</span>
              </h1>
              <h1 className=" font-bold text-xl sm:text-2xl lg:text-3xl text-white">
                detrás de una <span className=" text-[#DFBB0B]">sonrisa</span>
              </h1>
              <h1 className=" text-4xl sm:text-6xl lg:text-7xl font-black text-[#DFBB0B]">
                SALUDABLE
              </h1>
              <div className=" flex justify-start sm:justify-center items-center">
                <button className=" my-10 text-sm lg:text-base p-3 rounded-xl hover:bg-[#e4cc54] duration-300 bg-[#DFBB0B]">
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
              <div className=" p-4 border-[#DFBB0B] rounded-full border-[1px] ">
                <svg
                  className=" fill-[#DFBB0B] h-[30px] lg:h-[50px] "
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 407.504 407.504"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M376.328,45.601c-21.131-23.658-50.213-36.686-81.891-36.686c-24.766,0-51.477,14.735-70.994,25.501 c-7.105,3.922-16.821,9.284-19.693,9.637c-2.859-0.347-12.525-5.695-19.613-9.616C164.67,23.666,138.009,8.915,113.068,8.915 c-31.679,0-60.762,13.028-81.894,36.686C11.071,68.108,0,97.734,0,129.021c0,44.695,16.05,108.255,42.933,170.029 c11.96,27.484,24.691,51.233,36.816,68.68c14.432,20.766,26.817,30.859,37.864,30.859c4.902,0,13.878-2.079,18.914-16.007 c4.894-13.534,9.296-29.069,13.964-45.547c12.354-43.606,27.728-97.878,52.48-97.878h1.563c11.005,0,20.856,9.426,30.115,28.818 c9.172,19.209,16.145,44.752,22.898,69.485c4.463,16.351,8.68,31.792,13.416,45.085c4.934,13.842,13.809,15.912,18.666,15.915 c10.992-0.001,23.365-10.249,37.828-31.329c12.094-17.626,24.852-41.611,36.895-69.361c27.02-62.271,43.152-125.354,43.152-168.75 C407.504,97.733,396.432,68.107,376.328,45.601 M286.797,77.685c-0.254-0.017-25.844-1.242-49.139-7.411 c-10.504-2.781-22.924-8.369-22.924-10.027c0-1.614,13.494-9.471,16.748-11.267c17.924-9.888,42.469-23.43,62.955-23.43 c60.361,0,96.432,52.609,96.432,103.471c0,40.62-16.008,102.744-41.779,162.126c-11.457,26.404-24.012,50.047-35.35,66.572 c-13.082,19.067-21.547,24.61-24.111,24.105c-1.574-0.311-1.77-1.427-2.994-4.865c-4.531-12.712-8.668-27.863-13.047-43.904 c-6.938-25.41-14.109-51.687-23.928-72.25c-12.301-25.762-27.062-38.285-45.126-38.285h-1.563 c-17.401,0-31.821,12.423-44.081,37.978c-9.786,20.397-17.218,46.631-24.404,72.002c-4.58,16.165-8.905,31.436-13.602,44.424 c-1.037,2.867-1.357,4.739-3.271,5.029c-1.5,0.228-7.907-0.269-24.204-23.718c-11.346-16.325-23.855-39.702-35.223-65.824 C32.556,233.517,16.635,170.91,16.635,129.02c0-50.862,36.071-103.471,96.433-103.471c15.69,0,36.309,7.149,55.155,19.124 c2.764,1.757,6.656,4.748,10.42,7.642c1.502,1.155,2.982,2.292,4.36,3.329c4.418,3.309,10.388,7.636,17.398,11.763 c2.989,1.764,6.708,3.96,10.658,5.636c15.105,6.412,31.121,9.663,47.602,9.663c16.793,0,28.088-2.987,28.199-3.022 c0,0,2.527-0.668,2.447-1.325C289.227,77.702,286.797,77.685,286.797,77.685z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className=" w-full max-w-[1000px] grow grid h-fit shadow-lg hover:shadow-none duration-300 bg-white gap-5 grid-cols-1 md:grid-cols-3 rounded-lg p-3 ">
                <div className=" border-[#DFBB0B] border-r-[2px]  grow w-full block p-3 ">
                  <div className=" flex justify-center items-center  opacity-50">
                    <img
                      className=" rounded-lg h-[150px]  w-auto "
                      src="consultorio.webp"
                      alt=""
                    />
                  </div>
                  <div className=" my-2 flex justify-center items-center">
                    <h1 className=" font-semibold text-sm lg:text-base  text-center">
                      Nuestra visión
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className=" text-sm lg:text-base  text-justify">
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
                      className=" rounded-lg h-[150px]  w-auto "
                      src="consultorio.webp"
                      alt=""
                    />
                  </div>
                  <div className=" my-2 flex justify-center items-center">
                    <h1 className=" font-semibold text-sm lg:text-base  text-center">
                      Nuestra visión
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className=" text-sm lg:text-base  text-justify">
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
                <div className=" border-[#DFBB0B] border-l-[2px] grow w-full block p-3 ">
                  <div className=" flex justify-center items-center  opacity-50">
                    <img
                      className=" rounded-lg h-[150px]  w-auto "
                      src="consultorio.webp"
                      alt=""
                    />
                  </div>
                  <div className=" my-2 flex justify-center items-center">
                    <h1 className=" font-semibold text-sm lg:text-base  text-center">
                      Nuestra visión
                    </h1>
                  </div>
                  <div className=" flex justify-center items-center">
                    <p className=" text-sm lg:text-base  text-justify">
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
          <div className=" flex justify-center items-center w-full p-3">
            <h1 className=" text-2xl font-semibold">Nuestros servicios</h1>
          </div>
          <div className=" flex justify-center items-center gap-3 w-full">
            <div className="h-[1px] w-[100px] bg-black"></div>
            <svg
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="si-glyph si-glyph-teeth"
              className=" fill-[#DFBB0B] h-[20px] lg:h-[30px] "
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>1110</title> <defs> </defs>{" "}
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <path
                    d="M14.715,9.02 C14.715,12.045 14.151,15.887 12.434,15.887 C9.62,15.887 10.916,10.001 8.491,10.001 C6.066,10.001 6.886,15.918 4.569,15.918 C2.94,15.918 2.292,12.002 2.292,9.02 C2.292,7.213 -0.101,4.249 1.672,1.628 C3.846,-1.586 5.94,0.952 8.437,0.952 C10.972,0.952 12.949,-1.533 15.265,1.628 C17.101,4.137 14.715,7.244 14.715,9.02 L14.715,9.02 Z"
                    className="si-glyph-fill fill-[#DFBB0B]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            <div className="h-[1px] w-[100px] bg-black"></div>
          </div>
          <div className=" grid grid-cols-5 my-5 grow w-full gap-4">
            <ServiceCard2
              imgSrc="diagnostico.webp"
              title="Diagnóstico y prevención"
            />
            <ServiceCard2
              imgSrc="ortodoncia.webp"
              title="Odontología restauradora"
            />
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
                  <h1 className=" text-4xl sm:text-5xl lg:text-6xl text-[#d9b430] font-bold">
                    DESCUENTO
                  </h1>
                  <h1 className=" text-lg sm:text-2xl lg:text-3xl font-semibold">
                    DE HASTA
                  </h1>
                  <h1 className=" text-7xl lg:text-8xl text-[#d9b430]	 font-bold">
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
