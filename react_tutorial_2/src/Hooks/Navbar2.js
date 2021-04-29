import React, {useState} from 'react'
import { HookButton } from './HookButton'
import { Link } from 'react-router-dom'
import Dropdown from './DropdownHook.js'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'


function Navbar2() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
            console.log(dropdown)
        } else {
            setDropdown(false);
            console.log(dropdown)
        }
    }

    return(
            <nav className='bg-purple-500 flex items-center px-10'>
                <Link to='/'>STAN ASTRO</Link>

                <ul className='flex px-5' onClick={handleClick}>
                {click ? <FaTimes/> : <AiOutlineMenu/>}
                <li>
                    <Link to='/' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/services' className='flex' onClick={closeMobileMenu}>
                        Services
                        {dropdown ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                
                <li>
                    <Link to='/blog' onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                
                <li>
                    <Link to='/help' onClick={closeMobileMenu}>
                        Help
                    </Link>
                </li>

                <li>
                    <Link to='/users' onClick={closeMobileMenu}>
                        Users
                    </Link>
                </li>

                <li>
                    <Link to='/admin_tool' onClick={closeMobileMenu}>
                        Admin
                    </Link>
                </li>
                
            </ul>
            <HookButton/>
            </nav>
    )
}

export default Navbar2;

