import React from 'react'

function RadioButton(props) {
    return (
        <div>
            <input type="radio" value={props.currentValue} name={props.currentType} onChange={props.updateRadio}/>
            <label>{props.currentValue}</label>
        </div>
    )
}

export default RadioButton
