import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Entity from '../Entity'

function Admin() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                console.log(...res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Entity entities={users}/>
        </div>
    )
}

export default Admin
