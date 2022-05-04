import React from 'react'

const Card = ({ policies }) => {
    console.log(policies)
    function findChild(array) {
        array.forEach((item, index) => {
            console.log("item", item)
            if (typeof item === 'string') return item[0];
            if (typeof item === 'object') {
                findChild(item[Object.keys(item)])
                return Object.keys(item)
            }
        })
    }

    return (
        <div>
            {findChild(policies)}
        </div>
    )
}

export default Card