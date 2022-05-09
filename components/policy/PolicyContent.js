import React from 'react'

const PolicyContent = ({ policies }) => {
    return (
        <div className='py-2 pb-8'>
            {policies.map((p, i) => {
                return (
                    <details key={i}>
                        <summary className='list-none cursor-pointer font-extrabold text-xl pt-4'>{i + 1 + " . " + Object.keys(p)}</summary>
                        {p[Object.keys(p)].map((item, idx) => {
                            {
                                if (typeof item === 'string') {
                                    return (
                                        <div key={idx} className='list-decimal font-semibold text-lg px-4 pt-2'>
                                            <p>{(i + 1) + "." + (idx + 1) + ". " + item}</p>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <details key={idx} className='px-4 pt-2' open={true}>
                                            <summary className='flex cursor-pointer font-semibold text-lg'>
                                                {(i + 1) + "." + (idx + 1) + ". " + Object.keys(item)}
                                            </summary>
                                            {(item[Object.keys(item)]).map((child, id) => {
                                                if (typeof child === 'string') {
                                                    return <li key={id} className="list-disc px-8">{child}</li>
                                                } else {
                                                    return (
                                                        <details key={id} className='px-4' open={true}>
                                                            <summary className='list-disc flex cursor-pointer font-semibold text-md'>
                                                                <li className='list-disc'>{Object.keys(child)}</li>
                                                            </summary>
                                                            {(child[Object.keys(child)]).map((grandChild, index) => {
                                                                if (typeof grandChild === 'string') {
                                                                    return <li key={index}>{grandChild}</li>
                                                                } else {
                                                                    return <details key={index} className="list-disc" open={true}>
                                                                        <summary className='flex cursor-pointer font-normal text-md'>
                                                                            <li key={index} className="list-none px-4 text-sm">{Object.keys(grandChild)}</li>
                                                                        </summary>
                                                                        {(grandChild[Object.keys(grandChild)]).map((miniContent, id) => {
                                                                            if (typeof miniContent === 'string') {
                                                                                return <p key={id} className='font-extrabold'>{miniContent}</p>
                                                                            } else {
                                                                                return <div className='px-8 text-sm'>
                                                                                    {(Object.keys(miniContent)).map((key, id) => {
                                                                                        if (key.length === 1) {
                                                                                            console.log(key)
                                                                                            return <li>{miniContent[key]}</li>
                                                                                        } else {
                                                                                            return <li>{key}</li>
                                                                                        }
                                                                                    })}
                                                                                </div>
                                                                            }
                                                                        })}
                                                                    </details>
                                                                }
                                                            })}
                                                        </details>
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