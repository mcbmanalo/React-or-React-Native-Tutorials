import React, {useState} from 'react'
import { HookButton } from './HookButton'
import { Link } from 'react-router-dom'
import Dropdown from './DropdownHook.js'

function Navbar2() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
            <div onClick={handleClick}>
                <i className={click ? ' fas fa-times' : 'fas fa-bars'}/>
            </div>
        </div>
    )
}

export default Navbar2;

