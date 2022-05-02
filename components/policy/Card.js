import React from 'react'

const Card = ({ policy }) => {
    return (
        <div>
            {policy.map((obj, i) => {
                return <div key={i}>
                    <h1 className="font-bold">{Object.keys(obj)[0]}</h1>
                </div>
            })}
        </div>
    )
}

export default Card