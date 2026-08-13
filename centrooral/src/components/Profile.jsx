import React from "react";

const Profile = ({ name, description, image }) => {
  return (
    <div className=" flex justify-center rounded-lg hover:shadow-md hover:shadow-[#525252] hover:scale-[1.04] items-start duration-500">
      <div className=" block">
        <div className=" my-5 flex justify-center items-center">
          <img className=" h-[120px]  rounded-full" src={image} alt="" />
        </div>
        <div className=" flex justify-center items-center">
          <h1 className=" text-sm sm:text-base font-bold">{name}</h1>
        </div>
        <div className=" my-7 mx-5 lg:mx-10 flex justify-center items-center">
          <h1 className=" text-[12px] sm:text-sm  text-justify">
            El Dr. Juan Pérez es un odontólogo altamente calificado con una
            pasión por la odontología estética y restauradora. Con más de 15
            años de experiencia, el Dr. Pérez se ha especializado en
            tratamientos como carillas de porcelana, implantes dentales y
            blanqueamiento dental. Su enfoque personalizado y su habilidad para
            crear resultados naturales lo convierten en una opción popular entre
            aquellos que buscan mejorar su sonrisa. El Dr. Pérez se dedica a
            proporcionar a cada paciente una atención comprensiva y de alta
            calidad, centrándose en sus necesidades individuales para lograr
            resultados excepcionales.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
