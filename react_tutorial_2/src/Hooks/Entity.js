import React, { useState, useEffect } from 'react'
import Display from './Display'

function Entity(props) {
    // const [entityKeys, setEntityKeys] = useState([])
    // const entityDefinition = {
    //     Name: "text",
    //     Username: "text",
    //     Email: "text",
    //     Address: {
    //         Street: "text",
    //         Suite: "text",
    //         City: "text",
    //         Zipcode: "text",
    //         Geo: {
    //             lat: "text",
    //             lng: "text"
    //         }
    //     },
    //     Phone: 0
    // }

    // useEffect(() => {
    //     setEntityKeys(Object.keys(entityDefinition))
    //     const keys = Object.keys(entityDefinition)
    //     const values = Object.values(entityDefinition) 
    //     const len = keys.length
    //     console.log(keys)
    //     console.log(values)
    //     for (var i = 0; i < len ; i++)
    //     {
    //         console.log(values[i])
    //         if(values[i] instanceof Number)
    //         {
    //             console.log(`${values[i]} with key of ${keys[i]} is a number`)
    //         }
    //         if(values[i] instanceof String)
    //         {
    //             console.log(`${values[i]} with key of ${keys[i]} is a string`)
    //         }
    //         if(values[i] instanceof Object)
    //         {
    //             console.log(`${values[i]} with key of ${keys[i]} is an object`)
    //         }
    //     }
    // }, [])

    return (
        <div>
            <Display list={props.entities} toDisplay={props.display_list} displayNames={props.display_list_names}/>
        </div>
    )
}

export default Entity
