import React, { useEffect, useState } from "react";
import TitleBand from "../../components/TitleBand";
import ServiceCard from "../../components/ServiceCard";
import { ServicesList } from "../../utils/ServiceList";
import { labServicesList } from "../../utils/LabServiceList";
import { odServicesList } from "../../utils/OdServiceList";

function Services() {
  const [flippedCard, setFlippedCard] = useState(null);
  const serviceList = ServicesList;
  const labServiceList = labServicesList;
  const odServiceList = odServicesList;

  useEffect(() => {
    const closeCardOnOutsideClick = (event) => {
      if (
        flippedCard &&
        !event.target.closest(`[data-service-card-id="${flippedCard}"]`)
      ) {
        setFlippedCard(null);
      }
    };

    document.addEventListener("pointerdown", closeCardOnOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", closeCardOnOutsideClick);
    };
  }, [flippedCard]);
  console.log(serviceList[0].name);
  return (
    <div className=" font-sans h-fit block justify-center items-center">
      <div className=" bg-[#ffffff] block  relative">
        <div className=" h-[70px] sm:h-[100px] w-screen"></div>
      </div>
      <TitleBand
        title="SERVICIOS"
        color="bg-[#ffffff]/70"
        textColor="text-black"
        image="bg-[url('https://softdeveral.com/odonto/mouth.webp')]"
      />
      <div className=" block">
        <div className=" h-fit flex justify-center items-center w-screen bg-gradient-to-br from-[#DFBB0B] to-[#ffffff]">
          <div className=" m-2 md:m-10 grid grid-cols-1">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
                {serviceList.map((service, index) => (
                  <div key={index}>
                    <ServiceCard
                      cardId={`service-${index}`}
                      name={service.name}
                      image={service.image}
                      description={service.description}
                      isFlipped={flippedCard === `service-${index}`}
                      onFlip={() => setFlippedCard(`service-${index}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TitleBand
        title="LABORATORIO DIGITAL"
        color="bg-[#ffffff]/70"
        textColor="text-black"
        image="bg-[url('https://softdeveral.com/odonto/mouth.webp')]"
      />
      <div className=" block">
        <div className=" h-fit flex justify-center items-center w-screen bg-gradient-to-br from-[#646464] to-[#ffffff]">
          <div className=" m-2 md:m-10 grid grid-cols-1">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
                {labServiceList.map((service, index) => (
                  <div key={index}>
                    <ServiceCard
                      cardId={`lab-${index}`}
                      name={service.name}
                      image={service.image}
                      description={service.description}
                      isFlipped={flippedCard === `lab-${index}`}
                      onFlip={() => setFlippedCard(`lab-${index}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TitleBand
        title="OTROS SERVICIOS"
        color="bg-[#ffffff]/70"
        textColor="text-black"
        image="bg-[url('https://softdeveral.com/odonto/mouth.webp')]"
      />
      <div className=" block">
        <div className=" h-fit flex justify-center items-center w-screen bg-gradient-to-br from-[#646464] to-[#ffffff]">
          <div className=" m-2 md:m-10 grid grid-cols-1">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
                {odServiceList.map((service, index) => (
                  <div key={index}>
                    <ServiceCard
                      cardId={`other-${index}`}
                      name={service.name}
                      image={service.image}
                      description={service.description}
                      isFlipped={flippedCard === `other-${index}`}
                      onFlip={() => setFlippedCard(`other-${index}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
