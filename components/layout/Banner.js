import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-around bg-gradient-to-r from-green-999 via-green-800 text-white items-center py-5">
      <div className="py-5">
        <p className="text-4xl pb-5">Big savings for small business</p>
        <p className="text-lg">
          Save up to 40% on select shipping and surcharges when you open a new
          account.
        </p>
      </div>
      <a className="uppercase text-green-212 text-2xl font-bold hover:text-green-700 cursor-pointer py-4">sign up</a>
    </div>
  );
};

export default Banner;
