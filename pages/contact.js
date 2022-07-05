import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Header, Footer } from '../components/layout'
import Logo from '../components/layout/Logo';

const Contact = () => {
    const [values, setValues] = useState({ fullName: '', email: '', message: '' });
    const onUpdate = (e) => {
        setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const sendMessage = (e) => {
        e.preventDefault()
        if (!values.fullName || !values.email || !values.message) {
            alert("* field is required!")
        }
        const encodedSubject = encodeURIComponent("support - " + values.fullName)
        const encodedMessage = encodeURIComponent(values.message)
        window.location.assign(`mailto:enquiries@hsc.sg?subject=${encodedSubject}&body=${encodedMessage}&cc=${values.email}`)
    }
    return (
        <div>
            <Header />
            <div className='md:flex md:justify-center items-center h-4/6'>
                <div className='flex items-center opacity-90 md:w-2/5 py-20 md:py-0'>
                    <Logo />
                </div>
                <div className='flex-cols text-justify items-center md:w-2/5 bg-gray-200 rounded-md border p-6 px-2 md:px-20 my-8 text-gray-600'>
                    <div className='border-green-900 my-2'>
                        <div className='flex justify-center items-baseline'>
                            <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" className='text-green-900 opacity-80 pr-4' />
                            <h1 className='font-bold text-3xl text-green-900 opacity-80 text-center'>Contact form</h1>
                        </div>
                        <form className='py-6 md:pb-3'>
                            <label>
                                <p>Name:*</p>
                                <input onChange={(e) => onUpdate(e)} value={values.fullName} name="fullName" type='text' placeholder='Name' className='border border-1 focus:ring outline-none rounded px-4 py-2 w-full my-2 text-gray-600' />
                            </label>
                            <label>
                                <p>Email:*</p>
                            </label>
                            <input onChange={(e) => onUpdate(e)} value={values.email} name="email" placeholder='Email' type='email' className='border border-1 focus:ring outline-none rounded px-4 py-2 w-full my-2 text-gray-600' />
                            <label>
                                <p>Message:*</p>
                            </label>
                            <textarea onChange={(e) => onUpdate(e)} value={values.message} name="message" rows="7" cols="33" placeholder='Leave us a message' className='focus:ring outline-none rounded border border-1 p-3 px-4 py-2 my-2 w-full text-gray-600' />
                            <div className='flex justify-around items-center'>
                                <button onClick={sendMessage} type="submit" className='bg-green-800 text-white w-full md:w-1/4 py-3 hover:opactity-100 hover:outline focus:ring active:bg-green-900 rounded-md mt-4'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='my-4 text-center'>
                        <div className='border-green-900 p-6 bg-white rounded'>
                            <FontAwesomeIcon icon={faLocationDot} size="3x" className='text-green-900 opacity-80' />
                            <p className="font-semibold items-center pt-6 py-2 text-gray-700 hover:text-green-800 hover:underline-offset-1">
                                <a href="https://goo.gl/maps/GYS8pEqXufLxKGbo9">Block 513 Kampong Bahru Road <br /> #02-109 Keppel Distripark Singapore, 099449 </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact