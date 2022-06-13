import React from 'react'
import Status from './Status'
import Logo from '../layout/Logo'
import FormInput from './FormInput'
import { searchByContainerNumber } from '../../store'
import { toJS } from 'mobx'

const ContainerDetails = () => {
    const data = toJS(searchByContainerNumber.details)
    return (
        <div className='grid grid-rows-2 row-auto justify-around items-center'>
            <div className='justify-center py-6 items-center row-span-2'>
                <Logo />
            </div>
            <Status data={data} />
            <FormInput />
        </div>
    )
}

export default ContainerDetails