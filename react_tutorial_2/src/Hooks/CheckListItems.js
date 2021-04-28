import React from 'react'

const CheckListItems = props => {
    return (
        <li key={props.key}>
            <input type="checkbox" checked={e => props.isChecked(e.target.value)}></input>
            <div>
                <label>{props.name}</label>
                <label>{props.username}</label>
                <label>{props.companyName}</label>
            </div>
        </li>
    )
}

export default CheckListItems
