import React from "react";
import TitleBand from "../../components/TitleBand";

function Services() {
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
    </div>
  );
}

export default Services;
