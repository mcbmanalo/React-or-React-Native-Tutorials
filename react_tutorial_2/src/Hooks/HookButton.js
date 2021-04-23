import React from 'react'
import { Link } from 'react-router-dom'

export function HookButton() {
    return (
        <Link to='/signup'>
            <button>Sign Up</button>
        </Link>
    )
}