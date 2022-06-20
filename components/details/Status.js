import React from 'react'
import moment from 'moment'

const Status = ({ data }) => {
    console.log(data)
    return (
        <div>
            {data.HBL ? (
                <form className="rounded p-4 my-4 border border-green-999 width-auto grid grid-row-2 text-center">
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>Container Number: </span>
                        <span>{data.ContainerPrefix} {data.ContainerNumber}</span>
                    </div>
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>Last Day: </span>
                        <span>{moment.utc(data.ETA).format("llll")}</span>
                    </div>
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>HBL: </span>
                        <span>{data.lastDay ? moment.utc(data.lastDay).format("llll") : moment().utc(data.ETA).add(4, 'days').format("llll")}</span>
                    </div>
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>Quantity / Weight / Volume: </span>
                        <span>{data.Quantity + " / " + data.Weight + " / " + data.Volume}</span>
                    </div>
                    <div className='flex py-4'>
                        <div className='flex flex-col px-4'>
                            <span className='font-bold'>Markings </span>
                            <span>{data.Markings}</span>
                        </div>
                        <div className='flex flex-col px-4'>
                            <span className='font-bold'>Qty </span>
                            <span>{data.Quantity}</span>
                        </div>
                        <div className='flex flex-col px-4'>
                            <span className='font-bold'>Type </span>
                            <span>{data.Type}</span>
                        </div>
                        <div className='flex flex-col px-4'>
                            <span className='font-bold'>L × B × H </span>
                            <span>{data.Length + " x " + data.Breadth + " x " + data.Height}</span>
                        </div>
                        <div className='flex flex-col px-4'>
                            <span className='font-bold'>Remarks </span>
                            <span>{data.Remarks}</span>
                        </div>
                    </div>

                </form>
            ) : (
                <form className="rounded p-4 my-4 border border-green-999 width-auto grid grid-row-2 text-center">
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>Container Number: </span>
                        <span>{data.ContainerPrefix} {data.ContainerNumber}</span>
                    </div>
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>Estimated Time Arrival: </span>
                        <span>{moment.utc(data.ETA).format("llll")}</span>
                    </div>
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>Unstuff Date: </span>
                        <span>{data["DateofStuf/Unstuf"] ? moment.utc(data["DateofStuf/Unstuf"]).format("MMM Do, YYYY") : moment().utc(data.ETA).add(3, 'days').format("MMM Do, YYYY")}</span>
                    </div>
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>Last day: </span>
                        <soan>{data.lastDay ? moment.utc(data.lastDay).format("llll") : moment().utc(data.ETA).add(4, 'days').format("llll")}</soan>
                    </div>
                    <div className='flex justify-between py-2'>
                        <span className='font-bold'>Location: </span>
                        <span>{data.location ? data.location : "Location not provided"}</span>
                    </div>
                </form>

            )}


        </div>

    )
}

export default Status

