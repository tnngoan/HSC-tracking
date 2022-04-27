import React from 'react'

const Status = () => {
    return (
        <form className="rounded p-4 my-4 border border-green-999 width-auto grid grid-row-2 text-center font-semibold">
            <div className='flex justify-between'>
                <span>Container number:</span>
                <span>1234567</span>
            </div>
            <div className='flex justify-between'>
                <span>Estimate time arrival:</span>
                <span>24 Apr 2022 00:10</span>
            </div>
        </form>
    )
}

export default Status