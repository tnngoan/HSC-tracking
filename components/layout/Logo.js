import React from 'react'
import Image from "next/image";
import logo from "../../assets/images/logo.png";

const Logo = () => {
    return (
        <div className="grid grid-row-2">
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
        </div>
    )
}

export default Logo