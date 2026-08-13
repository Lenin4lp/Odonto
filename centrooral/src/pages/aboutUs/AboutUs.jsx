import React from "react";
import TitleBand from "../../components/TitleBand";
import Profile from "../../components/Profile";

function AboutUs() {
  return (
    <div className=" font-sans h-fit block justify-center items-center">
      <div className=" bg-cover block  relative">
        <div className=" h-[70px] sm:h-[100px] bg-black w-screen"></div>
      </div>
      <TitleBand
        title="NOSOTROS"
        color="bg-[#e4cc54]/70"
        textColor="text-white"
      />
      <div className=" block">
        <div className=" grid grid-cols-1 md:grid-cols-4">
          <div className=" md:col-span-2 flex justify-center items-center bg-[url('https://softdeveral.com/odonto/nosotros.webp')] h-[170px] sm:h-[400px]  bg-cover">
            <div className=" h-full w-screen flex justify-center items-center bg-black/90 relative">
              <img className=" h-full  object-cover" src="consul.webp" alt="" />
            </div>
          </div>
          <div className=" md:col-span-2 flex justify-center items-center">
            <div className=" m-5 lg:m-10 block">
              <div className=" flex justify-center items-center">
                <h1 className=" text-left text-[12px] sm:text-base   font-bold mb-5">
                  En Centro Oral, nuestra pasión es crear sonrisas saludables y
                  hermosas que transformen vidas. Desde nuestra fundación, nos
                  hemos comprometido a brindar una atención odontológica
                  integral y de calidad, centrada en el bienestar y la
                  satisfacción de nuestros pacientes.
                </h1>
              </div>
              <div className=" flex justify-center items-center">
                <h1 className=" text-left text-[12px] sm:text-base  mb-5 lg:mb-10">
                  Con un equipo de profesionales altamente capacitados y
                  apasionados por la odontología, combinamos la última
                  tecnología con un enfoque personalizado para ofrecer
                  tratamientos que no solo mejoran la salud bucal, sino que
                  también realzan la confianza y la calidad de vida de quienes
                  confían en nosotros.
                </h1>
              </div>
              <div className=" flex justify-center items-center">
                <h1 className=" text-left text-[12px] sm:text-base md:text-lg ">
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
      <div className=" h-fit w-screen block border-y-[2px] border-[#d9b430]">
        <div className=" flex justify-start items-start">
          <div className=" p-5 md:p-7 bg-[#d9b430]">
            <h1 className=" text-base sm:text-xl md:text-2xl text-white font-semibold">
              Conoce a nuestro equipo
            </h1>
          </div>
        </div>
        <div className=" my-3 sm:my-5 md:my-10 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          <div>
            <Profile name="Dr. Marcelo Ruales" image={"/chelo.webp"} />
          </div>
          <div>
            <Profile name="Dr. Marcelo Ruales" image={"/marcelo.webp"} />
          </div>
          <div className=" col-span-1 sm:col-span-2 md:col-span-1">
            <Profile name="Dra. Carolina Ruales" image={"/Carolina.webp"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
