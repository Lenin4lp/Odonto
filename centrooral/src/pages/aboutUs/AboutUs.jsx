import React from "react";
import TitleBand from "../../components/TitleBand";

function AboutUs() {
  return (
    <div className=" font-sans h-fit block justify-center items-center">
      <div className=" bg-cover block  relative">
        <div className=" h-[111px] lg:h-[133px] w-screen"></div>
      </div>
      <TitleBand
        title="NOSOTROS"
        color="bg-[#e4cc54]/70"
        textColor="text-white"
        image="bg-[url('https://softdeveral.com/odonto/us.webp')]"
      />
      <div className=" block">
        <div className=" grid grid-cols-1 md:grid-cols-4">
          <div className=" md:col-span-2 flex justify-center items-center bg-[url('https://softdeveral.com/odonto/nosotros.webp')] h-[170px] sm:h-[200px] md:h-screen bg-cover">
            <div className=" h-full w-screen bg-black/90 relative">
              <div className=" absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center">
                <img
                  className=" h-[115px] sm:h-[150px] lg:h-[200px] w-auto"
                  src="https://softdeveral.com/odonto/logowhite.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" md:col-span-2 flex justify-center items-center">
            <div className=" m-5 lg:m-10 block">
              <div className=" flex justify-center items-center">
                <h1 className=" text-left text-base md:text-lg lg:text-xl font-bold mb-5">
                  En Centro Oral, nuestra pasión es crear sonrisas saludables y
                  hermosas que transformen vidas. Desde nuestra fundación, nos
                  hemos comprometido a brindar una atención odontológica
                  integral y de calidad, centrada en el bienestar y la
                  satisfacción de nuestros pacientes.
                </h1>
              </div>
              <div className=" flex justify-center items-center">
                <h1 className=" text-left text-base md:text-lg lg:text-xl mb-5 lg:mb-10">
                  Con un equipo de profesionales altamente capacitados y
                  apasionados por la odontología, combinamos la última
                  tecnología con un enfoque personalizado para ofrecer
                  tratamientos que no solo mejoran la salud bucal, sino que
                  también realzan la confianza y la calidad de vida de quienes
                  confían en nosotros.
                </h1>
              </div>
              <div className=" flex justify-center items-center">
                <h1 className=" text-left text-base md:text-lg lg:text-xl">
                  En Centro Oral,{" "}
                  <span className=" text-[#d9b430] font-medium">
                    tu sonrisa{" "}
                    <span className=" text-black font-normal">es </span>
                    <span className=" text-[#d9b430] font-bold">
                      nuestra especialidad
                    </span>
                  </span>
                  .
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
