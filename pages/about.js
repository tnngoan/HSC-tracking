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
        <div>
            <Header />
            <div className='min-h-screen px-8 '>
                <div className='md:px-60 text-center py-2 mb-16'>
                    <div className='px-8 rounded'>
                        <Image className='rounded' alt="HSC trucking in 1977" src={trucking} layout="responsive" />
                    </div>
                    <div className='mx-8 mt-4 '>
                        <p className='py-4 px-6'>Hup Soon Cheong Services can trace its roots back to 1977. We started off as Hup Soon Cheong Transport, providing transportation services with a few lorries.</p>
                    </div>
                </div>

                <div className='md:px-60 text-center  py-2 mb-16'>
                    <div className='px-8 rounded'>
                        <Image alt="HSC incorporated in 1992" src={moretrucking} layout="responsive" />
                    </div>
                    <div className='mx-8 mt-4'>
                        <p className='py-4 px-6'>As the world moves into containerisation, we evolved and started providing container trucking services in 1980s.</p>
                    </div>
                </div>

                <div className='md:px-60 text-center  py-2 mb-16'>
                    <div className='px-8 rounded'>
                        <Image alt="HSC incorporated in 1992" src={containerstation} layout="responsive" />
                    </div>
                    <div className=' mx-8 mt-4'>
                        <p className='py-4 px-6'>Venturing into providing Container Freight Station services in 1987 proved to be a turning point for the company.  We have since grown to be a key player in Singapore’s Container Freight Station space.</p>
                    </div>
                </div>

                <div className='md:px-60 text-center  py-2 mb-16'>
                    <div className='px-8 rounded'>
                        <Image alt="HSC incorporated in 1992" src={incorporated} layout="responsive" />
                    </div>
                    <div className='mx-8 mt-4'>
                        <p className='py-4 px-6'>Hup Soon Cheong Services was incorporated as a private limited company in 1992.</p>
                    </div>
                </div>

                <div className='md:px-60 text-center  py-2 mb-16'>
                    <div className='px-8 rounded'>
                        <Image alt="HSC incorporated in 1992" src={staffs} layout="responsive" />
                    </div>
                    <div className='mx-8 mt-4'>
                        <p className='py-4 px-6'>Our staff strength stands at 200 and we count renowned multinational logistics companies as our key customers.  Cargo that we handle flows to all parts of the world.</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
