import React from "react";
import TitleBand from "../../components/TitleBand";

function Contact() {
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
    </div>
  );
}

export default Contact;
