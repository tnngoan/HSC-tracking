import React from 'react'
import Status from './Status'
import Logo from '../layout/Logo'
import FormInput from './FormInput'

const ContainerDetails = () => {
    return (
        <div className='grid grid-rows-2 row-auto justify-around items-start'>
            <div className='justify-center py-6 items-center row-span-2'>
                <Logo />
            </div>
            <Status />
            <FormInput />
        </div>
    )
}

export default ContainerDetails