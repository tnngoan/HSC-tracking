import React from 'react'

const Card = ({ policies }) => {
    function hasChild(x) {
        if (x.length === 1) {
            return x[0]
        }
    }
    return (
        <div>
            {policies.map((policy, i) => {
                let no = i + 1
                let title = Object.keys(policy)
                let contents = policy[title]
                console.log(contents)
                return (
                    <div key={i}>
                        <h1 className="font-bold">{no + ". " + title}</h1>
                        {contents.map((content, id) => {
                            return <p key={id}>{Object.keys(content)}</p>
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Card