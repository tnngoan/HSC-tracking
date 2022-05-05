import React from 'react'

const PolicyContent = ({ policies }) => {
    console.log(policies)
    return (
        <div>
            {policies.map((p, i) => {
                return (
                    <p className='cursor-pointer font-bold'><a href="/privacy" key={i}>{Object.keys(p)}</a></p>
                )
            })}
        </div>
    )
}

export default PolicyContent;