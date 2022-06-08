import React from 'react'
import { Header, Footer } from '../components/layout'
import Image from "next/image"
import incorporated from '../public/images/incorporate.jpg'
import trucking from '../public/images/truck.jpg'
import moretrucking from '../public/images/trucks.jpg'
import containerstation from '../public/images/moretrucking.jpg'
import staffs from '../public/images/staffs.jpg'

export default function about() {
    return (
        <div className='h-screen'>
            <Header />
            <div className='snap-y snap-mandatory h-screen md:h-4/5 overflow-scroll md:snap-x md:mx-auto md:flex md:w-6/12 scrollbar-hide'>
                <div className='text-justify snap-end w-full h-screen md:h-full flex items-center md:items-start justify-center md:justify-between md:flex-shrink-0'>
                    <div className='md:p-12 p-1'>
                        <div className='flex items-center justify-center'>
                            <Image alt="HSC trucking in 1977" src={trucking} width={846} height={455} />
                        </div>
                        <p className='md:p-4 md:pt-12 p-6 text-gray-600 text-xl font-normal'>Hup Soon Cheong Services can trace its roots back to 1977. We started off as Hup Soon Cheong Transport, providing transportation services with a few lorries.</p>
                    </div>
                </div>

                <div className='text-justify snap-center w-full h-screen md:h-full flex items-center md:items-start justify-between md:flex-shrink-0'>
                    <div className='md:p-12 p-1'>
                        <div className='flex items-center justify-center'>
                            <Image alt="HSC incorporated in 1992" src={moretrucking} width={846} height={455} />
                        </div>
                        <p className='md:p-4 md:pt-12 p-6 text-gray-600 text-xl font-normal'>As the world moves into containerisation, we evolved and started providing container trucking services in 1980s.</p>
                    </div>
                </div>

                <div className='text-justify snap-center w-full h-screen md:h-full flex items-center md:items-start justify-between md:flex-shrink-0'>
                    <div className='md:p-12 p-1'>
                        <div className='flex items-center justify-center'>
                            <Image alt="HSC incorporated in 1992" src={containerstation} width={846} height={455} />
                        </div>
                        <p className='md:p-4 md:pt-12 p-6 text-gray-600 text-xl font-normal'>Venturing into providing Container Freight Station services in 1987 proved to be a turning point for the company.  We have since grown to be a key player in Singapore’s Container Freight Station space.</p>
                    </div>
                </div>

                <div className='text-justify snap-center w-full h-screen md:h-full flex items-center md:items-start justify-between md:flex-shrink-0'>
                    <div className='md:p-12 p-1'>
                        <div className='flex items-center justify-center'>
                            <Image alt="HSC incorporated in 1992" src={incorporated} width={846} height={455} />
                        </div>
                        <p className='md:p-4 md:pt-12 p-6 text-gray-600 text-xl font-normal'>Hup Soon Cheong Services was incorporated as a private limited company in 1992.</p>
                    </div>
                </div>

                <div className='text-justify snap-center w-full h-screen md:h-full flex items-center md:items-start justify-between md:flex-shrink-0'>
                    <div className='md:p-12 p-1'>
                        <div className='flex items-center justify-center'>
                            <Image alt="HSC incorporated in 1992" src={staffs} width={846} height={455} />
                        </div>
                        <p className='md:p-4 md:pt-12 p-6 text-gray-600 text-xl font-normal'>Our staff strength stands at 200 and we count renowned multinational logistics companies as our key customers.  Cargo that we handle flows to all parts of the world.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
