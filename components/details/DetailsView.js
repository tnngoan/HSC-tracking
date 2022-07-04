import React from 'react'
import Status from './Status'
import Logo from '../layout/Logo'
import FormInput from './FormInput'
import HomeButton from '../layout/HomeButton'

const DetailsView = ({ data }) => {
    return (
        <div>{data ?
            (<div className='grid grid-rows-2 row-auto justify-around items-center'>
                <div className='justify-center py-6 items-center row-span-2'>
                    <Logo />
                </div>
                <Status data={data} />
                <FormInput data={data} />
                <HomeButton />
            </div>) : (
                <div>
                    <Logo />
                    <p>Content not found!</p>
                    <HomeButton />
                </div>)}
        </div>


    )
}

export default DetailsView;