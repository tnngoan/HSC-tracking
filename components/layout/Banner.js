import React from "react";

const Banner = () => {
  return (
    <div className="md:flex md:justify-around bg-green-900 bg-gradient-to-r from-green-999 via-green-800 text-white items-center py-8 my-8 md:my-12 px-10">
      <div className="py-5">
        <p className="md:text-4xl pb-5">Big savings for small business</p>
        <p className="text-lg">
          Save up to 40% on select shipping and surcharges when you open a new
          account.
        </p>
      </div>
      <a className="uppercase text-2xl font-bold hover:font-extrabold cursor-pointer">sign up</a>
    </div>
  );
};

export default Banner;
