import React from "react";

const ContactCard = ({ icon, title, subtitle, children, className = "" }) => (
  <article
    className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)] ${className}`}
  >
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#b99100] via-[#e1bd27] to-[#f0d96e]" />
    <div className="p-6 sm:p-7">
      <header className="mb-6 block md:flex items-center gap-4 border-b border-black/10 pb-5">
        <div className="flex justify-center items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d9b430] text-black shadow-[0_6px_16px_rgba(217,180,48,0.28)]">
            {icon}
          </div>
        </div>

        <div className="">
          <h2 className="text-lg text-center font-bold text-[#171717]">
            {title}
          </h2>
          <p className="mt-1 text-xs text-center leading-relaxed text-gray-500">
            {subtitle}
          </p>
        </div>
      </header>
      {children}
    </div>
  </article>
);

export default ContactCard;
