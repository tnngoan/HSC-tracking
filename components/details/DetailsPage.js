import React from 'react'
import ContainerDetails from './ContainerDetails'
import HomeButton from '../layout/HomeButton'

const Details = (details) => {
    return (
        <div className='px-24'>
            <ContainerDetails details={details} />
            <HomeButton />
        </div>
    )
}

export default Details