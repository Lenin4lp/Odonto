import React from "react";
import TitleBand from "../../components/TitleBand";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import ContactCard from "../../components/ContactCard";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
    <path
      d="M5 4h3l1.5 4-2 1.5a15 15 0 0 0 7 7l1.5-2 4 1.5v3a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="m4 7 8 6 8-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
    <path
      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

function Contact() {
  const ToothIcon = () => (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-3.5 w-3.5 shrink-0 fill-[#DFBB0B] sm:h-4 sm:w-4"
    >
      <path d="M7.2 2C4.4 2 2.5 4.2 2.5 7.1c0 2.1.9 3.8 1.7 5.3.7 1.3 1.3 2.5 1.5 4.2.3 2.9 1 5.4 2.7 5.4 1.3 0 1.8-1.7 2.3-3.5.4-1.4.7-2.4 1.3-2.4s.9 1 1.3 2.4c.5 1.8 1 3.5 2.3 3.5 1.7 0 2.4-2.5 2.7-5.4.2-1.7.8-2.9 1.5-4.2.8-1.5 1.7-3.2 1.7-5.3C21.5 4.2 19.6 2 16.8 2c-1.5 0-2.6.5-3.5.9-.6.3-1 .5-1.3.5s-.7-.2-1.3-.5C9.8 2.5 8.7 2 7.2 2Z" />
    </svg>
  );

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
      <div className=" bg-black block  relative">
        <div className=" h-[70px] sm:h-[100px] w-screen"></div>
      </div>
      <TitleBand
        title="CONTACTO"
        color="bg-black/70"
        textColor="text-white"
        image="bg-[url('https://softdeveral.com/odonto/phonesss.jpeg')]"
      />
      <div className=" block bg-gradient-to-br from-[#D9B430] to-[#ffffff]">
        <div className="px-5 pb-3 pt-10 text-center sm:pt-14">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6d00]">
            Estamos para ayudarte
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            Canales de comunicación
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Elige el medio que prefieras y agenda tu próxima consulta con
            nuestro equipo.
          </p>
        </div>
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 pb-12 pt-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 lg:px-8 lg:pb-16">
          <ContactCard
            icon={<PhoneIcon />}
            title="Teléfonos"
            subtitle="Llámanos o escríbenos para agendar una cita"
          >
            <div className="space-y-3">
              {["Marcelo Ruales", "Edison Ruales", "Carolina Ruales"].map(
                (name) => (
                  <a
                    key={name}
                    href="tel:+15551234567"
                    className="flex items-center justify-between rounded-xl bg-[#f8f6ef] px-4 py-3 transition hover:bg-[#f1e7bc]"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Od. {name}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-600">
                        +1 (555) 123-4567
                      </p>
                    </div>
                    <span className="text-lg text-[#9d7c00]" aria-hidden="true">
                      →
                    </span>
                  </a>
                ),
              )}
            </div>
          </ContactCard>
          <ContactCard
            icon={<MailIcon />}
            title="Correo electrónico"
            subtitle="Envíanos tus dudas y responderemos lo antes posible"
          >
            <div className="space-y-3">
              {[
                ["Información general", "marc@example.com"],
                ["Citas y consultas", "marc@example.com"],
                ["Atención al paciente", "marc@example.com"],
              ].map(([label, email]) => (
                <a
                  key={label}
                  href={`mailto:${email}`}
                  className="block rounded-xl bg-[#f8f6ef] px-4 py-3 transition hover:bg-[#f1e7bc]"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#8a6d00]">
                    {label}
                  </p>
                  <p className="mt-1 break-all text-sm font-medium text-gray-800">
                    {email}
                  </p>
                </a>
              ))}
            </div>
          </ContactCard>
          <ContactCard
            icon={<LocationIcon />}
            title="Nuestros consultorios"
            subtitle="Encuentra la sede más cercana a ti"
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-5">
              <div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">
                  Valle de los Chillos
                </h3>
                <div className="space-y-2">
                  {[1, 2].map((office) => (
                    <div
                      key={office}
                      className="flex gap-3 rounded-xl bg-[#f8f6ef] p-3"
                    >
                      <ToothIcon />
                      <p className="text-xs leading-relaxed text-gray-600">
                        Av. San Luis y 9na transversal, Edificio Platinium
                        Plaza, 2do piso, oficina 2
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold text-gray-900">Quito</h3>
                <div className="flex gap-3 rounded-xl bg-[#f8f6ef] p-3">
                  <ToothIcon />
                  <p className="text-xs leading-relaxed text-gray-600">
                    Av. San Luis y 9na transversal, Edificio Platinium Plaza,
                    2do piso, oficina 2
                  </p>
                </div>
              </div>
            </div>
          </ContactCard>
        </section>
        <div className="hidden grid-cols-1 gap-5 m-5 md:grid-cols-3 lg:gap-7">
          <div className=" mt-2  mb-5 flex justify-center border-[1px] bg-white  border-black w-full rounded-lg p-3 items-start shadow-xl ">
            <div className=" block grow">
              <div className=" h-full w-full flex p-2 rounded-lg justify-center items-center">
                <div className=" p-2 rounded-full bg-gradient-to-b from-[#D9B430] to-[#ffffff] border-black border-[2px]">
                  <svg
                    className=" h-[30px] "
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
                        d="M5.11596 12.7268L8.15456 9.08666C8.46255 8.69067 8.61655 8.49267 8.69726 8.27061C8.76867 8.07411 8.79821 7.86486 8.784 7.65628C8.76793 7.42055 8.67477 7.18766 8.48846 6.72187L7.77776 4.94513C7.50204 4.25581 7.36417 3.91116 7.12635 3.68525C6.91678 3.48618 6.65417 3.3519 6.37009 3.29856C6.0477 3.23803 5.68758 3.32806 4.96733 3.50812L3 4.00002C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3122 20.7617 17.952 20.7012 17.6297C20.6478 17.3456 20.5136 17.083 20.3145 16.8734C20.0886 16.6356 19.7439 16.4977 19.0546 16.222L17.4691 15.5878C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4002C15.4877 15.512 15.2854 15.7144 14.8807 16.1191L11.7943 19.1569"
                        className=" stroke-black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <h1 className=" font-semibold text-sm">Teléfono</h1>
              </div>
              <div className="">
                <div className=" my-2 text-sm flex justify-center gap-2 items-center">
                  <div className="block">
                    <p className=" text-center text-black">
                      Od. Marcelo Ruales
                    </p>
                    <p className=" text-center text-lg text-black">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className=" my-2 text-sm flex justify-center gap-2 items-center">
                  <div className="block">
                    <p className=" text-center text-black">Od. Edison Ruales</p>
                    <p className=" text-center text-lg text-black">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className=" my-2 text-sm flex justify-center gap-2 items-center">
                  <div className="block">
                    <p className=" text-center text-black">
                      Od. Carolina Ruales
                    </p>
                    <p className=" text-center text-lg text-black">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 mb-5 bg-white border-[1px] border-black flex justify-center w-full rounded-lg p-3 items-start shadow-xl ">
            <div className=" block grow">
              <div className=" h-full w-full flex p-2 rounded-lg justify-center items-center">
                <div className=" p-2 rounded-full bg-gradient-to-b from-[#D9B430] to-[#ffffff] border-black border-[2px]">
                  <svg
                    className=" h-[30px] "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <h1 className=" font-semibold text-sm">Correo Electrónico</h1>
              </div>
              <div className="my-7">
                <div className="  text-sm flex justify-center gap-2 items-center">
                  <div className="block">
                    <p className=" text-base text-black">marc@example.com</p>
                  </div>
                </div>
                <div className=" my-2 text-sm flex justify-center gap-2 items-center">
                  <div className="block">
                    <p className=" text-base text-black">marc@example.com</p>
                  </div>
                </div>
                <div className=" my-2 text-sm flex justify-center gap-2 items-center">
                  <div className="block">
                    <p className=" text-base text-black">marc@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-2 mb-5 bg-white border-[1px] border-black flex justify-center w-full rounded-lg p-3 items-start  shadow-xl ">
            <div className=" block grow">
              <div className=" h-full w-full flex p-2 rounded-lg justify-center items-center">
                <div className=" p-2 rounded-full bg-gradient-to-b from-[#D9B430] to-[#ffffff] border-black border-[2px]">
                  <svg
                    className=" h-[30px] "
                    version="1.1"
                    id="XMLID_128_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
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
                      <g id="location-pin">
                        {" "}
                        <g>
                          {" "}
                          <path d="M12,24l-0.6-0.4C11,23.3,2,17.2,2,10C2,4.5,6.5,0,12,0s10,4.5,10,10c0,7.2-9,13.3-9.4,13.6L12,24z M12,2c-4.4,0-8,3.6-8,8 c0,5.2,6.1,10.1,8,11.6c1.9-1.5,8-6.4,8-11.6C20,5.6,16.4,2,12,2z M12,14c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,14,12,14z M12,8c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,8,12,8z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <h1 className=" font-semibold text-sm">
                  Nuestros consultorios
                </h1>
              </div>
              <div className="flex p-3 justify-start items-center">
                <h1 className=" text-sm text-black font-semibold">
                  Valle de los Chillos
                </h1>
              </div>
              <div className=" flex justify-start items-center">
                <ToothIcon />
                <div className=" px-2">
                  <p className=" text-[13px] text-black">
                    Av. San luis y 9na transversal, Edificio PLATINIUM PLAZA 2do
                    piso, oficina 2
                  </p>
                </div>
              </div>
              <div className=" flex justify-start items-center">
                <ToothIcon />
                <div className=" px-2">
                  <p className=" text-[13px] text-black">
                    Av. San luis y 9na transversal, Edificio PLATINIUM PLAZA 2do
                    piso, oficina 2
                  </p>
                </div>
              </div>
              <div className="flex p-3 justify-start items-center">
                <h1 className=" text-sm text-black font-semibold">Quito</h1>
              </div>
              <div className=" flex justify-start items-center">
                <ToothIcon />
                <div className=" px-2">
                  <p className=" text-[13px] text-black">
                    Av. San luis y 9na transversal, Edificio PLATINIUM PLAZA 2do
                    piso, oficina 2
                  </p>
                </div>
              </div>
            </div>
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
        <div className="w-full bg-[url('https://softdeveral.com/odonto/surgery.webp')] bg-center bg-cover">
          <div className="relative w-full bg-gradient-to-br from-[#d9b430]/95 via-[#e7c957]/90 to-[#f4e7b3]/90">
            <div className=" absolute top-0 right-0 left-0 bottom-0 h-full w-full grid grid-cols-1 lg:grid-cols-3"></div>
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-5 lg:gap-12 lg:px-10">
              <div className="flex items-center justify-center lg:col-span-2 lg:justify-start">
                <div className="max-w-md rounded-3xl border border-white/30 bg-black/5 p-7 backdrop-blur-sm sm:p-9">
                  <div className=" flex justify-center items-center ">
                    <img
                      className=" h-[70px] md:h-[105px] w-auto "
                      src="/home.png"
                      alt="Centro Oral"
                    />
                  </div>
                  <div className="mt-7">
                    <p className="text-center text-sm leading-7 text-black/75 sm:text-left sm:text-base">
                      En Centro Oral, nuestra pasión es crear sonrisas
                      saludables y hermosas que transformen vidas. Desde nuestra
                      fundación, nos hemos comprometido a brindar una atención
                      odontológica integral y de calidad, centrada en el
                      bienestar y la satisfacción de nuestros pacientes.
                    </p>
                    <div className="mt-7 flex items-center justify-center gap-3 sm:justify-start">
                      <span className="h-px w-10 bg-black/40" />
                      <span className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">
                        Tu sonrisa, nuestra especialidad
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:col-span-3">
                <div className="w-full max-w-2xl rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-9 lg:p-10">
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#9a7900]">
                      Agenda tu consulta
                    </span>
                    <h1 className="mt-2 text-lg md:text-3xl font-bold tracking-tight text-[#171717] ">
                      Contáctanos
                    </h1>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500 sm:text-base">
                      Déjanos tus datos y nuestro equipo se comunicará contigo.
                    </p>
                  </div>

                  <div className="text-sm sm:text-base">
                    <form className="w-full">
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Nombre completo
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Ej. María González"
                        className="h-12 w-full rounded-xl border border-gray-200 bg-[#faf9f5] px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#c49d12] focus:bg-white focus:ring-4 focus:ring-[#d9b430]/15"
                      />
                      <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="mb-2 block text-sm font-semibold text-gray-700"
                          >
                            Correo electrónico
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            className="h-12 w-full rounded-xl border border-gray-200 bg-[#faf9f5] px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#c49d12] focus:bg-white focus:ring-4 focus:ring-[#d9b430]/15"
                            type="email"
                            placeholder="correo@ejemplo.com"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="mb-2 block text-sm font-semibold text-gray-700"
                          >
                            Teléfono
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            className="h-12 w-full rounded-xl border border-gray-200 bg-[#faf9f5] px-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#c49d12] focus:bg-white focus:ring-4 focus:ring-[#d9b430]/15"
                            type="tel"
                            placeholder="099 999 9999"
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        ¿Cómo podemos ayudarte?
                      </label>
                      <textarea
                        className="h-36 w-full rounded-xl border border-gray-200 bg-[#faf9f5] p-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#c49d12] focus:bg-white focus:ring-4 focus:ring-[#d9b430]/15"
                        name="message"
                        id="contact-message"
                        placeholder="Cuéntanos brevemente el motivo de tu consulta..."
                        style={{ resize: "none" }}
                      ></textarea>
                      <div className="mt-7">
                        <button
                          type="submit"
                          className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#171717] px-6 py-3.5 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-black/20"
                        >
                          <span>Enviar mensaje</span>
                          <span aria-hidden="true">→</span>
                        </button>
                        <p className="mt-3 text-center text-xs text-gray-400">
                          Responderemos tu solicitud lo antes posible.
                        </p>
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
