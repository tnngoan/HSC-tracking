import React from 'react'

const FormInput = () => {
    return (
        <div className='grid grid-rows-4'>
            <div className='flex justify-between'>
                <input placeholder='Email or phone number' className='w-3/4 px-4 border border-2 rounded-md mr-2' />
                <button className='border border-2 text-white bg-green-900 border-green-900 rounded-md px-4 py-3 w-1/4 ml-2'>Update me</button>
            </div>
        </div>
    )
}

export default FormInput