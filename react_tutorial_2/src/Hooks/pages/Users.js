import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Link to='/add_user'>Add User</Link>
            <button>Delete User</button>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.email}</li>)
                }
            </ul>
        </div>
    )
}

export default Users
