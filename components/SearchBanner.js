import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

const SearchBanner = () => {
  return (
    <div className="grid grid-row-3 justify-center row-auto h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[540px] 2xl:h-[700px]">
      <div className="flex items-center row-span-2">
        <Image src={logo} width={440} height={231.4} />
      </div>
      <div>
        <p className="text-3xl text-center">Hup Soon Cheong Services</p>
      </div>
      <form className="flex justify-center items-start">
        <input
          className="text-slate-300 py-5 px-6 border border-2 rounded-md"
          type="text"
          placeholder="Container number"
        />
        <button className='p-5 bg-green-900 rounded-md ml-2 text-white' type="submit">Check</button>
      </form>
    </div>
  );
};

export default SearchBanner;
