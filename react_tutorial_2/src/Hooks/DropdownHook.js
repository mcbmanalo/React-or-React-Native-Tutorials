import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { DropdownItems } from './DropdownItems'

function DropdownHook() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div>
            <ul onClick={handleClick}>
                {DropdownItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link 
                                to={item.path}
                                onClick={() => setClick(false)}>
                                    {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DropdownHook
