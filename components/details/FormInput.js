import React, { useState, useRef } from 'react'

const FormInput = () => {
    const [email, setEmail] = useState("")
    const typingTimeoutRef = useRef(null)

    const submitEmail = (e) => {
        console.log(email)
    }
    const updateInput = (e) => {
        setEmail(e.target.value)
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
            const input = e.target.value;
            console.log(input)
        }, 500)
    }
    return (
        <div className='grid grid-rows-4'>
            <div className='flex justify-between'>
                <input onChange={updateInput} value={email} type="email" placeholder='Insert email or phone number' className='w-3/4 px-4 border border-2 rounded-md mr-2' />
                <button onClick={submitEmail} className='border border-2 text-white bg-green-900 border-green-900 rounded-md px-4 py-3 w-1/4 ml-2'>Update me</button>
            </div>
        </div>
    )
}

export default FormInput;