import React from 'react'
import Image from "next/image";
import logo from "../../public/images/logo.png";

const Logo = () => {
    return (
        <div className="grid grid-row-2 flex justify-center items-center">
            <div className="row-span-2 flex justify-center items-center">
                <div className="px-5 w-2/3 opacity-80">
                    <Image src={logo} width={440} height={231.4} alt="HSC logo" />
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <p className="text-2xl md:text-4xl text-center px-5 font-semibold text-green-999 opacity-80">
                    Hup Soon Cheong Services
                </p>
            </div>
        </div>
    )
}

export default Logo