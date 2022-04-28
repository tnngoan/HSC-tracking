import React from 'react'

const FormInput = () => {
    const validateEmail = (email) => {
        const regex = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
        return regex.test(email.trim())
    }
    const validateNumber = (phone) => {
        const regex = "/^(\+\d{3})?\d{9}$/";
        return regex.test(phone.trim())
    }
    return (
        <div className='grid grid-rows-4'>
            <div className='flex justify-between'>
                <input type="text" required placeholder='Phone or Email' className='w-3/4 px-4 border border-2 rounded-md mr-2' />
                <button className='border border-2 text-white bg-green-900 border-green-900 rounded-md px-4 py-3 w-1/4 ml-2'>Update me</button>
            </div>
        </div>
    )
}

export default FormInput