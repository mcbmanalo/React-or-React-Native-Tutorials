import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Entity from '../Entity'
import Display from '../Display'

function Admin() {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const user_display_list_name = ['Name', 'Email', 'Company Name']
    const user_display_list = ['name', 'email', 'company.name']
    const post_display_list_name = ['User Id', 'Title', 'Body']
    const post_display_list = ['userId', 'title', 'body']
    
    const sendGetRequest = async (endpoint, func) => {
        axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`)
            .then(res => {
                console.log(res)
                func(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        sendGetRequest('users', setUsers);
        sendGetRequest('posts', setPosts);
    }, [])

    return (
        <div>
            {/* <Display list={users} toDisplay={user_display_list} displayNames={user_display_list_name}/> */}
            <Entity entities={users} display_list={user_display_list} display_list_names={user_display_list_name}/>
            <Entity entities={posts} display_list={post_display_list} display_list_names={post_display_list_name}/>
            {/* {users[0].username} */}
        </div>
    )
}

export default Admin
