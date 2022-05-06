import React from 'react'

const Tag = ({ data }) => {
    const findChild = (obj) => {
        obj.map((item, id) => {
            if (typeof item === 'string') { return <li>item</li> } else {
                findChild(item[Object.keys(item)])
                return Object.keys(item)
            }
        })
    }
    return (
        <details key={key}>
            <summary className='cursor-pointer font-extrabold text-lg'>
                {findChild(data)}
            </summary>
        </details>
    )
}

export default Tag