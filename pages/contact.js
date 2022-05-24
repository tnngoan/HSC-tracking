import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faLocationDot, faPhone, faMessage, faAt } from '@fortawesome/free-solid-svg-icons'
import { Header, Footer } from '../components/layout'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className='p-8 md:px-40 lg:px-80 flex-cols text-center min-h-screen bg-green-900 items-center pb-28'>
                <h1 className='font-bold text-3xl text-white py-12'>GET IN TOUCH</h1>
                <div className='border border-2 border-green-900 p-8 bg-white my-2'>
                    <div className='flex justify-around items-center'>
                        <FontAwesomeIcon icon={faEnvelopeOpen} size="3x" className='text-green-900' />
                    </div>
                    <form className='py-6'>
                        <div className='flex items-top justify-center py-2'>
                            <label><FontAwesomeIcon icon={faAt} size="2x" className='text-green-900 px-2' /></label>
                            <input placeholder='Email' className='border border-2 rounded border-green-999 px-2 py-1 w-full md:py-2 text-gray-600' />
                        </div>
                        <div className='flex items-top justify-center py-2'>
                            <label><FontAwesomeIcon icon={faMessage} size="2x" className='text-green-900 px-2' /></label>
                            <textarea placeholder='Leave us a message' className='rounded border border-2 border-green-999 p-3 w-full  text-gray-600' />
                        </div>
                        <button type="submit" className='bg-green-900 text-white w-full md:w-3/4 py-3 rounded-md mt-4'>Submit</button>
                    </form>
                </div>
                <div className=''>
                    <div className='border border-2 border-green-900 p-8 bg-white'>
                        <FontAwesomeIcon icon={faLocationDot} size="3x" className='text-green-900' />
                        <p className="font-semibold items-center pt-6 py-2">
                            Block 513 Kampong Bahru Road <br /> #02-109 Keppel Distripark Singapore, 099449
                        </p>
                    </div>
                    <div className='border border-2 border-green-900 p-8 bg-white my-2'>
                        <FontAwesomeIcon icon={faPhone} size="3x" className='text-green-900' />
                        <p className="font-semibold items-center pt-6 py-2">
                            +65-66726111
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact