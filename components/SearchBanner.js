import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

const SearchBanner = () => {
  return (
    <div className="grid grid-row-3 mb-5 justify-center row-auto h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[540px] 2xl:h-[700px]">
      <div className="flex items-center row-span-2">
        <div className="px-5">
          <Image src={logo} width={440} height={231.4} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-2xl md:text-3xl text-center px-5">
          Hup Soon Cheong Services
        </p>
      </div>
      <form className="flex justify-center items-center">
        <input
          className="text-slate-300 py-3 px-4 border border-2 rounded-md"
          type="text"
          placeholder="Container number"
        />
        <button
          className="px-4 py-3 bg-green-900 rounded-md ml-2 text-white border border-1 border-green-900"
          type="submit"
        >
          Check
        </button>
      </form>
    </div>
  );
};

export default SearchBanner;
