import React from 'react'
import moment from 'moment'

const Status = ({ data }) => {
    console.log("data at status as props", data)
    return (
        <form className="rounded p-4 my-4 border border-green-999 width-auto grid grid-row-2 text-center font-semibold">
            <div className='flex justify-between'>
                <span>Container Number: </span>
                <span>{data.ContainerPrefix} {data.ContainerNumber}</span>
            </div>
            <div className='flex justify-between'>
                <span>Estimated Time Arrival: </span>
                <span>{moment.utc(data.ETA).format("llll")}</span>
            </div>
            <div className='flex justify-between'>
                <span>Unstuff Date: </span>
                <span>{data["DateofStuf/Unstuf"] ? moment.utc(data["DateofStuf/Unstuf"]).format("MMM Do, YYYY") : moment().utc(data.ETA).add(3, 'days').format("MMM Do, YYYY")}</span>
            </div>
            <div className='flex justify-between'>
                <span>Last day: </span>
                <soan>{data.lastDay ? moment.utc(data.lastDay).format("llll") : moment().utc(data.ETA).add(4, 'days').format("llll")}</soan>
            </div>
            <div className='flex justify-between'>
                <span>Location: </span>
                <span>{data.location ? data.location : "Location not provided"}</span>
            </div>
        </form>
    )
}

export default Status

