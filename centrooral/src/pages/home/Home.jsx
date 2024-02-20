import React from "react";

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
        <div className=" h-[133px] w-screen"></div>
        <div className=" h-screen z-10 w-screen absolute bg-white/10"></div>
        <div className=" h-[100px] z-10 bottom-0 w-screen absolute bg-gradient-to-b from-[#dbdbdb] to-[#ffffff]"></div>
        <div className=" w-screen h-fit absolute bottom-[60px]">
          <div className=" flex justify-center items-center">
            <div className=" grid grid-cols-3 gap-10">
              <div className=" shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 hover:cursor-pointer hover:scale-110 duration-300 p-5 rounded-full w-fit  bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]">
                <div className=" flex justify-center items-center">
                  <svg
                    className="h-[10px] md:h-[35px] "
                    fill="#d9b430"
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
              <div className=" shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 p-5 rounded-full hover:cursor-pointer hover:scale-110 duration-300 w-fit bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]">
                <div className=" flex justify-center items-center">
                  <svg
                    className="h-[10px] md:h-[35px] "
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
                        fill="#DFBB0B"
                      />{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <div className=" shadow-sm shadow-gray-500 hover:shadow-lg hover:shadow-gray-600 h-fit z-10 p-5 hover:cursor-pointer hover:scale-110 duration-300 rounded-full w-fit  bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]">
                <svg
                  className="h-[10px] md:h-[35px] "
                  fill="#d9b430"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-143 145 512 512"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
        <div className=" absolute top-[130px] overflow-hidden m-20 w-screen left-0 flex z-20 justify-start items-start">
          <div className=" grid grid-cols-3 ">
            <div className=" block col-span-2">
              <h1 className=" text-xl text-white">Tu sonrisa,</h1>
              <h1 className=" text-xl text-[#d9b430] font-semibold">
                nuestra especialidad
              </h1>
              <h1 className=" pt-10 font-bold text-3xl text-white">
                Descubre la <span className=" text-[#d9b430]">magia</span>
              </h1>
              <h1 className=" font-bold text-3xl text-white">
                detrás de una <span className=" text-[#d9b430]">sonrisa</span>
              </h1>
              <h1 className=" text-7xl font-black text-[#d9b430]">SALUDABLE</h1>
              <div className=" flex justify-center items-center">
                <button className=" my-10 p-3 rounded-xl hover:bg-[#e4cc54] duration-300 bg-[#d9b430]">
                  Agenda una cita ya!
                </button>
              </div>
            </div>
            <div className=" col-span-1"></div>
          </div>
        </div>
        <div className="">
          <video
            className=" h-screen w-screen object-cover "
            src="https://softdeveral.com/odonto/home_video.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      <div className=" h-fit block">
        <div className=" my-5 mx-10">
          <div className=" block">
            <div className=" mb-10 rounded-lg bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb] w-full h-fit border border-[#d9b430]">
              <div className=" grid grid-cols-6">
                <div className=" col-span-2 bg-[#ffffff] flex justify-center items-center relative">
                  <div className=" absolute h-full w-[5px] bg-[#d9b430] left-0"></div>
                  <div className=" absolute h-full w-[5px] bg-[#d9b430] right-0"></div>
                  <div className=" m-5 opacity-50">
                    <img
                      className=" h-[200px] w-auto object-contain"
                      src="https://softdeveral.com/odonto/solologo.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" col-span-4 flex justify-start items-center">
                  <div className=" m-5 block">
                    <h1 className=" text-left font-semibold underline underline-offset-4 decoration-2 decoration-[#d9b430]">
                      Nuestra visión
                    </h1>
                    <h1 className=" text-justify text-base my-4">
                      En Centro Oral nos comprometemos a brindar a nuestros
                      pacientes una atención odontológica integral y de calidad,
                      centrada en la excelencia clínica y el bienestar del
                      paciente. Nuestro objetivo es mejorar la salud bucal de
                      nuestros pacientes, ofreciendo tratamientos innovadores,
                      personalizados y seguros, respaldados por un equipo de
                      profesionales altamente capacitados y comprometidos con la
                      excelencia en el servicio. Nos esforzamos por crear un
                      ambiente acogedor y de confianza, donde nuestros pacientes
                      se sientan cómodos y bien atendidos en todo momento.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className=" my-10 rounded-lg bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb] w-full h-fit border border-[#d9b430]">
              <div className=" grid grid-cols-6">
                <div className=" col-span-4 flex justify-center items-center relative">
                  <div className=" m-5 block">
                    <h1 className=" text-left font-semibold underline underline-offset-4 decoration-2 decoration-[#d9b430]">
                      Tecnología de punta
                    </h1>
                    <h1 className=" text-justify text-base my-4">
                      En Centro Oral, nos mantenemos a la vanguardia de la
                      odontología mediante la implementación de tecnologías de
                      última generación. Nuestro compromiso con la excelencia
                      nos impulsa a utilizar equipos de diagnóstico y
                      tratamiento de última tecnología, asegurando así
                      procedimientos precisos, efectivos y cómodos para nuestros
                      pacientes.
                    </h1>
                    <div className=" flex justify-center items-center my-2">
                      <button className=" p-2 rounded-lg border border-white bg-[#d9b430] hover:border-black hover:bg-[#e4cc54] duration-300">
                        Nuestros servicios
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" col-span-2 flex justify-center items-center relative">
                  <div className=" absolute h-full w-[5px] bg-[#d9b430] left-0"></div>
                  <div className=" absolute h-full w-[5px] bg-[#d9b430] right-0"></div>
                  <div className="">
                    <img
                      className=" h-full w-auto object-contain"
                      src="https://softdeveral.com/odonto/tecnologia.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" my-10 rounded-lg bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb] w-full h-fit border border-[#d9b430]">
              <div className=" grid grid-cols-6">
                <div className=" col-span-2 flex justify-center items-center relative">
                  <div className=" absolute h-full w-[5px] bg-[#d9b430] left-0"></div>
                  <div className=" absolute h-full w-[5px] bg-[#d9b430] right-0"></div>
                  <div className="">
                    <img
                      className=" h-full w-auto object-contain"
                      src="https://softdeveral.com/odonto/smile.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" col-span-4 flex justify-center items-center relative">
                  <div className=" m-5 block">
                    <h1 className=" text-left font-semibold underline underline-offset-4 decoration-2 decoration-[#d9b430]">
                      Queremos ser la causa de tu mejor sonrisa
                    </h1>
                    <h1 className=" text-justify text-base my-4">
                      La sonrisa es parte crucial de tu salud y bienestar. Nos
                      esforzamos por ofrecer tratamientos odontológicos
                      avanzados que no solo mejoren la estética de tu sonrisa,
                      sino también tu salud bucal. Nuestro equipo altamente
                      capacitado y apasionado por la odontología utiliza
                      tecnologías de vanguardia para garantizar que cada
                      paciente reciba un tratamiento personalizado y de alta
                      calidad.
                    </h1>
                    <div className=" flex justify-center items-center my-2">
                      <button className=" p-2 bg-[#d9b430] hover:bg-[#e4cc54] duration-300 rounded-lg border hover:border-black border-white">
                        Visítanos hoy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20 bg-[url('https://softdeveral.com/odonto/background.webp')] border-y-[2px] border-[#d9b430] bg-cover w-full h-fit block">
          <div className=" flex justify-start items-center">
            <h1 className=" font-semibold text-xl rounded-full p-2 bg-black m-10 text-white">
              Nuestros Servicios
            </h1>
          </div>
          <div className=" my-5 block">
            {services.map((service, index) => (
              <div key={index} className=" block">
                <h1 className=" font-semibold text-base rounded-full p-2 w-fit bg-black mx-10 text-white">
                  {service.type}
                </h1>
                <div className=" grid grid-cols-5 h-fit">
                  {service.includedServices.map((includedService, index) => (
                    <div
                      key={index}
                      className=" h-fit group flex justify-center items-center relative"
                    >
                      <h1 className=" font-semibold text-sm text-center rounded-full p-3 w-fit border border-black hover:scale-[1.05] hover:border-[#d9b430] hover:cursor-pointer duration-500 bg-white m-10 text-black">
                        {includedService}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-screen bg-black h-fit block">
          <div className=" flex justify-center items-center">
            <div className=" my-10 grid grid-cols-3 w-full">
              <div className=" col-span-1 flex justify-center items-center">
                <svg
                  className=" fill-white h-[100px]"
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
              <div className=" col-span-1 flex justify-center items-center">
                <div className=" block text-center text-white">
                  <h1 className=" text-4xl font-semibold">NO TE PIERDAS UN</h1>
                  <h1 className=" text-6xl text-[#d9b430] font-bold">
                    DESCUENTO
                  </h1>
                  <h1 className=" text-3xl font-semibold">DE HASTA</h1>
                  <h1 className=" text-8xl text-[#d9b430]	 font-bold">15%</h1>
                  <h1 className=" text-2xl font-bold">
                    EN TU PRIMERA CONSULTA
                  </h1>
                </div>
              </div>
              <div className=" col-span-1 flex justify-center items-center">
                <svg
                  className=" fill-white h-[100px]"
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
