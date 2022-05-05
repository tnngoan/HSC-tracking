import React from 'react'

const PolicyContent = ({ policies }) => {
    return (
        <div>
            {policies.map((p, i) => {
                return (
                    <details key={i}>
                        <summary className='cursor-pointer font-bold'>{Object.keys(p)}</summary>
                        {p[Object.keys(p)].map((item, id) => {
                            {
                                if (typeof item === 'string') { return item } else {
                                    return <details key={id}>
                                        <summary className='cursor-pointer font-semibold'>
                                            {Object.keys(item)}
                                        </summary>
                                    </details>
                                }
                            }
                            { console.log((item)) }
                        })}
                    </details>
                )
            })}
        </div>
    )
}

export default PolicyContent;