import React from "react";
import TitleBand from "../../components/TitleBand";
import ContactIcon from "../../components/ContactIcon";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Icon, icon } from "leaflet";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const contacts = [
    {
      name: "Teléfono",
      image: (
        <svg
          className=" h-[80px] md:h-[100px] opacity-60"
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
            <path
              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ),
      description: (
        <div className=" block text-center text-sm lg:text-base">
          <h1>098 406 9344 / 098 336 0525</h1>
          <h1>098 441 4385</h1>
        </div>
      ),
    },
    {
      name: "Email",
      image: (
        <svg
          className=" h-[80px] md:h-[100px] opacity-60"
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
            <path
              d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ),
      description: (
        <div className=" block text-center mb-[25px]">
          <h1 className="">qKJt8@example.com</h1>
        </div>
      ),
    },
    {
      name: "Dirección",
      image: (
        <svg
          className=" h-[80px] md:h-[100px] opacity-60"
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
            <path
              d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ),
      description: (
        <div className=" block text-sm md:text-base text-center text-wrap lg:mb-[25px]">
          <h1>Calle 1 # 2-3, Barrio San Francisco</h1>
        </div>
      ),
    },
  ];

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1483/1483336.png",
    iconSize: [55, 55],
  });

  const locations = [
    {
      address: "Calle 1 # 2-3, Barrio San Francisco",
      position: [-0.327118, -78.448112],
    },
    {
      address: "Calle 1 # 2-3, Barrio San Francisco",
      position: [-0.305274, -78.45261],
    },
  ];

  const position = [-0.3142027822163241, -78.45284079241819];

  return (
    <div className=" font-sans h-fit block justify-center items-center">
      <div className=" bg-cover block  relative">
        <div className=" h-[111px] lg:h-[133px] w-screen"></div>
      </div>
      <TitleBand
        title="CONTACTO"
        color="bg-black/70"
        textColor="text-white"
        image="bg-[url('https://softdeveral.com/odonto/phonesss.jpeg')]"
      />
      <div className=" block ">
        <div className="h-fit md:h-[450px] pb-10 md:pb-5 p-5 md:p-10 flex justify-center items-center w-screen bg-gradient-to-br from-[#f5f5f5] to-[#dbdbdb]">
          <div className=" h-full grid grid-cols-1 md:grid-cols-9 ">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className=" mt-5 md:mt-0 md:col-span-3 px-5 md:px-10 flex justify-center items-center"
              >
                <div className=" block">
                  <ContactIcon>{contact.image}</ContactIcon>
                  <div className=" my-3 block">
                    <h1 className=" text-center text-lg md:text-xl font-semibold">
                      {contact.name}
                    </h1>
                  </div>
                  {contact.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" border-[2px] border-[#d9b430] w-screen h-fit grid grid-cols-1 md:grid-cols-2">
          <div className=" h-fit relative">
            <MapContainer
              className=" z-10 w-full h-[250px] md:h-[400px]"
              center={position}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((location, index) => (
                <a href="" key={index}>
                  <Marker
                    position={location.position}
                    icon={customIcon}
                  ></Marker>
                </a>
              ))}
            </MapContainer>
          </div>
          <div className=" flex justify-center items-center bg-gradient-to-br from-[#2c2c2c] to-[#000000]">
            <div className=" block">
              <h1 className=" text-base text-center m-5 text-wrap lg:text-lg text-white underline-offset-2 underline decoration-[#d9b430]">
                Visítanos en nuestras sucursales en el Valle de los Chillos
              </h1>
            </div>
          </div>
        </div>
        <div className=" h-fit w-screen bg-[url('https://softdeveral.com/odonto/surgery.webp')] bg-center bg-cover">
          <div className=" relative h-full w-full bg-[#d9b430]/80">
            <div className=" absolute top-0 right-0 left-0 bottom-0 h-full w-full grid grid-cols-1 lg:grid-cols-3"></div>
            <div className=" h-full p-2 sm:p-8 md:p-10 w-full grid grid-cols-1 lg:grid-cols-3">
              <div className="flex mt-10 justify-center col-span-1 items-start">
                <div className=" block">
                  <div className=" flex justify-center items-center ">
                    <img
                      className=" h-[115px] sm:h-[150px] lg:h-[150px] w-auto"
                      src="https://softdeveral.com/odonto/blacklogo.png"
                      alt=""
                    />
                  </div>
                  <div className=" mx-5 sm:mx-10 my-5">
                    <h1 className=" font-semibold text-black text-[12px] sm:text-sm text-justify">
                      En Centro Oral, nuestra pasión es crear sonrisas
                      saludables y hermosas que transformen vidas. Desde nuestra
                      fundación, nos hemos comprometido a brindar una atención
                      odontológica integral y de calidad, centrada en el
                      bienestar y la satisfacción de nuestros pacientes.
                    </h1>
                  </div>
                </div>
              </div>

              <div className="  mt-5 sm:mt-10 flex lg:col-span-2 w-full h-full justify-center items-center">
                <div className=" block w-full">
                  <div className=" mb-5 sm:mb-10 flex justify-center items-center">
                    <h1 className=" text-2xl md:text-3xl text-center text-black font-bold">
                      Contáctanos
                    </h1>
                  </div>

                  <div className=" flex justify-center items-center text-sm sm:text-base">
                    <form className=" block">
                      <label htmlFor="">
                        <p className=" mb-2">Nombre</p>
                      </label>
                      <input
                        type="text"
                        className=" rounded-md h-[40px] w-full px-5 font-semibold"
                      />
                      <div className=" my-5 grid-cols-1 md:grid-cols-2 gap-5 grid">
                        <div>
                          <label htmlFor="">
                            <p className=" mb-2">Email</p>
                          </label>
                          <input
                            className=" rounded-md h-[40px] w-full md:w-[290px] px-5 font-semibold"
                            type="email"
                          />
                        </div>
                        <div>
                          <label htmlFor="">
                            <p className=" mb-2">Teléfono</p>
                          </label>
                          <input
                            className=" rounded-md h-[40px] w-full md:w-[290px] px-5 font-semibold"
                            type="text"
                          />
                        </div>
                      </div>
                      <label htmlFor="">
                        <p className=" mb-2">Mensaje</p>
                      </label>
                      <textarea
                        className=" rounded-md p-5 h-[150px] font-semibold w-full"
                        name=""
                        id=""
                        style={{ resize: "none" }}
                      ></textarea>
                      <div className=" my-5 flex justify-center items-center">
                        <button className=" text-base font-semibold border-[1px] hover:shadow-md hover:shadow-black duration-300 border-black rounded-lg p-3 bg-white">
                          <p>Contactar</p>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
