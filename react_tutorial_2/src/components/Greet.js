import React from 'react'

const Greet = props => {
    const {name, alias} = props
    
    return (
        <div>
            <h1>{name} is an {alias}</h1>
        </div>
    )
}

export default Greet;