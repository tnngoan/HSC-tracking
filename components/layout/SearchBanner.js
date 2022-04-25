import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../assets/images/logo.png";

const SearchBanner = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const searchNum = keyword.trim();
    const containerNumLength = 7;
    const hblNumLength = 17;
    if (searchNum.length === containerNumLength) {
      console.log("input is container number", searchNum);
      router.push({
        pathname: "/details",
        query: { type: "container", value: searchNum },
      });
    } else if (searchNum.length === hblNumLength) {
      console.log("input is hbl number", searchNum);
      router.push({
        pathname: "/details",
        query: { type: "hbl", value: searchNum },
      });
    } else {
      console.log("invalid", searchNum.length);
    }
  };
  return (
    <div className="grid grid-row-3 mb-5 justify-center row-auto h-[450px] sm:h-[400px] lg:h-[500px] xl:h-[540px] 2xl:h-[700px]">
      <div className="flex items-center row-span-2">
        <div className="px-5">
          <Image src={logo} width={440} height={231.4} alt="HSC logo" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-2xl md:text-4xl text-center px-5 font-semibold">
          Hup Soon Cheong Services
        </p>
      </div>
      <form
        className="flex justify-center items-center"
        onSubmit={submitHandler}
      >
        <input
          className="text-green-999 py-3 px-4 border border-2 rounded-md focus-green-999"
          type="text"
          minLength="7"
          maxLength="17"
          placeholder="Container or HBL number"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          className="px-4 py-3 bg-green-999 rounded-md ml-2 text-white border border-2 border-green-999"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-8 text-white rounded-full cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBanner;