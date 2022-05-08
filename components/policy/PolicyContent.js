import React from 'react'

const PolicyContent = ({ policies }) => {
    return (
        <div>
            {policies.map((p, i) => {
                return (
                    <details key={i}>
                        <summary className='list-none cursor-pointer font-extrabold text-lg pt-4'>{i + 1 + " . " + Object.keys(p)}</summary>
                        {p[Object.keys(p)].map((item, idx) => {
                            {
                                if (typeof item === 'string') {
                                    return (
                                        <div className='font-bold text-lg px-4 pt-2'>
                                            <p key={idx}>{(i + 1) + "." + (idx + 1) + ". " + item}</p>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <details key={idx} className='px-4 pt-2' open='true'>
                                            <summary className='flex cursor-pointer font-bold text-lg'>
                                                {(i + 1) + "." + (idx + 1) + ". " + Object.keys(item)}
                                            </summary>
                                            {(item[Object.keys(item)]).map((item, id) => {
                                                if (typeof item === 'string') {
                                                    return <li key={id} className="list-disc px-8">{item}</li>
                                                } else {
                                                    return (
                                                        <React.Fragment>
                                                            <details key={id} className='px-4'>
                                                                <summary className='flex cursor-pointer font-semibold text-md'>
                                                                    {Object.keys(item)}
                                                                </summary>
                                                            </details>
                                                        </React.Fragment>
                                                    )
                                                }
                                            })}
                                        </details>
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