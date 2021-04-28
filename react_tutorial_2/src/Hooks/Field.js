import React from 'react'

const Field = props => {
    return (
        <div>
            <label>{props.fieldTitle}</label>
            <input 
                type="text"
                value={props.fieldValue}
                onChange={(event) => props.onChange(event.target.value)}></input>
        </div>
    )
}

export default Field
