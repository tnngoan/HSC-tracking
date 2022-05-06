import React from 'react'
import Tag from './Tag'

const PolicyContent = ({ policies }) => {
    return (
        <div>
            {policies.map((p, i) => {
                return (
                    <details key={i}>
                        <summary className='cursor-pointer font-extrabold text-lg'>{Object.keys(p)}</summary>
                        {p[Object.keys(p)].map((item, id) => {
                            {
                                if (typeof item === 'string') {
                                    return
                                    (<p>{item}</p>)
                                } else {
                                    return (
                                        <React.Fragment>
                                            <details key={id} className='px-4'>
                                                <summary className='flex cursor-pointer font-semibold text-lg'>
                                                    {Object.keys(item)}

                                                </summary>
                                            </details>
                                            {(item[Object.keys(item)]).map((item, id) => {
                                                if (typeof item === 'string') { return item } else {
                                                    return Object.keys(item)
                                                }
                                            })}
                                        </React.Fragment>
                                    )
                                }
                            }
                        })}
                    </details>
                )
            })}
        </div>
    )
}

export default PolicyContent;