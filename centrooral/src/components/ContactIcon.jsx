import React from "react";

const ContactIcon = ({ children }) => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" rounded-full hover:shadow-lg hover:shadow-gray-500 duration-500 shadow-lg border-[1px] border-[#d9b430] h-fit w-auto p-5 md:p-7 bg-white">
        {children}
      </div>
    </div>
  );
};

export default ContactIcon;
