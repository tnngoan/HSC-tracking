import React from 'react'

const PolicyContent = ({ policies }) => {
    return (
        <div>
            {policies.map((p, i) => {
                return (
                    <details key={i}>
                        <summary className='cursor-pointer font-extrabold text-lg'>{Object.keys(p)}</summary>
                        {p[Object.keys(p)].map((item, id) => {
                            {
                                if (typeof item === 'string') { return item } else {
                                    return (
                                        <div>
                                            <details key={id} className='px-4'>
                                                <summary className='flex cursor-pointer font-semibold text-lg'>
                                                    {Object.keys(item)}

                                                </summary>
                                            </details>
                                            {console.log(item[Object.keys(item)])}
                                        </div>
                                    )
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