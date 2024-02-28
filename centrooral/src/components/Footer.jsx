import React from "react";

function Footer() {
  const info = [
    {
      title: "Dirección:",
      info: "Calle 1 # 2-3, Barrio San Francisco",
      image: (
        <svg
          className="h-[25px] sm:h-[30px] w-auto"
          viewBox="-4 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
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
            <title>location</title> <desc>Created with Sketch Beta.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              {" "}
              <g
                id="Icon-Set"
                transform="translate(-104.000000, -411.000000)"
                fill="#000000"
              >
                {" "}
                <path
                  d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                  id="location"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      title: "Telefonos:",
      info: "1234567890",
      image: (
        <svg
          className="h-[25px] sm:h-[30px] w-auto"
          viewBox="0 0 24 24"
          fill="none"
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
            <g id="Communication / Phone">
              {" "}
              <path
                id="Vector"
                d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      title: "Email:",
      info: "qKJt8@example.com",
      image: (
        <svg
          className=" fill-black h-[25px] sm:h-[30px] w-auto"
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
                d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345 c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345 C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203 c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958 c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064 c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571 c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637 L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136 C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435 C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959 l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959 C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8 V385.92z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
  ];

  const pages = ["Inicio", "Nosotros", "Servicios", "Contacto"];
  const services = [
    "Implantes dentales",
    "Carillas y coronas dentales",
    "blanqueamiento dental",
    "Diseño de sonrisa digital",
    "Tecnología CAD-CAM en computadora",
    "Rehabilitación oral CAD-CAM",
    "Ortodoncia Metálica",
    "Ortodoncia Estética",
    "Endodoncia",
    "Periodoncia",
    "Odontopediatria",
    "Cirugía Oral",
    "Sonrisa de Halloween",
  ];
  const currentYear = new Date().getFullYear();
  return (
    <div className=" h-fit w-full bg-white ">
      <div className=" block">
        <div className=" sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className=" col-span-1 my-5 px-5 md:px-10 lg:px-0 flex justify-center sm:justify-end start">
            <div className=" block">
              <img
                className=" h-[80px] w-auto object-contain"
                src="https://softdeveral.com/odonto/odontologo2.jpeg"
                alt=""
              />
              {info.map((info, index) => (
                <div key={index} className=" flex my-4">
                  <div>{info.image}</div>
                  <div className=" text-[11px] sm:text-[13px] mx-5">
                    {info.info}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" col-span-1 flex sm:pt-5 justify-center items-start">
            <div className=" grid grid-cols-1 md:grid-cols-2">
              <div className=" block py-5 md:px-10">
                <h1 className=" font-semibold mb-5 text-center sm:text-left">
                  Páginas
                </h1>
                {pages.map((page, index) => (
                  <div
                    key={index}
                    className=" text-[11px] text-center sm:text-left md:text-[13px] flex justify-center sm:justify-start my-2"
                  >
                    {page}
                  </div>
                ))}
              </div>
              <div className=" block py-5">
                <h1 className=" font-semibold text-center sm:text-left mb-5">
                  Servicios
                </h1>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className=" text-[11px] text-center sm:text-left md:text-[13px] flex justify-center sm:justify-start my-2"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" col-span-2 md:col-span-1 flex sm:my-5 justify-center md:justify-end px-10 lg:px-0 lg:justify-center items-start">
            <div className=" block py-5">
              <h1 className=" font-semibold mb-5 text-center">Síguenos</h1>
              <div className=" flex justify-center items-center">
                <svg
                  className="h-[25px] mx-2 md:h-[35px] fill-[#3b5998] hover:fill-black duration-500 hover:cursor-pointer"
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
                <svg
                  className="h-[25px] fill-[#F56040] hover:fill-black duration-500 hover:cursor-pointer mx-2 md:h-[35px] "
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
                    />{" "}
                  </g>
                </svg>
                <svg
                  className="h-[25px] fill-[#0e76a8] hover:fill-black duration-500 hover:cursor-pointer mx-2 md:h-[35px] "
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
        <div className=" flex justify-center items-center py-1 w-full h-fit bg-gradient-to-br from-[#e4cc54] to-[#d9b430]">
          <h1 className=" text-[12px] text-center">{`Copyright © ${currentYear} SOFTDEVERAL`}</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
