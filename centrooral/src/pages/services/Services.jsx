import React from "react";
import TitleBand from "../../components/TitleBand";
import ServiceCard from "../../components/ServiceCard";
import { ServicesList } from "../../utils/ServiceList";

function Services() {
  const serviceList = ServicesList;
  console.log(serviceList[0].name);
  return (
    <div className=" font-sans h-fit block justify-center items-center">
      <div className=" bg-cover block  relative">
        <div className=" h-[111px] lg:h-[133px] w-screen"></div>
      </div>
      <TitleBand
        title="SERVICIOS"
        color="bg-[#ffffff]/70"
        textColor="text-black"
        image="bg-[url('https://softdeveral.com/odonto/mouth.webp')]"
      />
      <div className=" block">
        <div className=" h-fit flex justify-center items-center w-screen bg-gradient-to-br from-[#2c2c2c] to-[#000000]">
          <div className=" m-10 grid grid-cols-1">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
                {serviceList.map((service, index) => (
                  <div key={index}>
                    <ServiceCard
                      name={service.name}
                      image={service.image}
                      description={service.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" h-fit w-screen bg-[#d9b430] bg-gradient-to-br from-[#d9b430] to-[#d1b758] flex justify-center items-center">
          <div className=" block text-base md:text-lg font-bold text-black mx-5 my-10">
            <div className=" flex justify-center items-center">
              <h1 className=" text-center">
                Pregúntanos acerca del servicio que requieras
              </h1>
            </div>
            <div className=" flex justify-center items-center">
              <h1 className=" text-center">
                Y consigue la sonrisa que siempre soñaste!
              </h1>
            </div>
            <div className=" flex justify-center items-center mt-6">
              <button className=" text-base font-semibold border-[1px] hover:shadow-md hover:shadow-black duration-300 border-black rounded-lg p-3 bg-white">
                <p>Consulta ya!</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
