import React from 'react'

const Status = (details) => {
    return (
        <form className="rounded p-4 my-4 border border-green-999 width-auto grid grid-row-2 text-center font-semibold">
            <div className='flex justify-between'>
                <span>{details.type} number:</span>
                <span>{details.number}</span>
            </div>
            <div className='flex justify-between'>
                <span>Estimate time arrival:</span>
                <span>{details.time}</span>
            </div>
        </form>
    )
}

export default Status