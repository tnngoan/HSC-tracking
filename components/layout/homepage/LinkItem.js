import React, { useState } from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const LinkItem = ({ item }) => {
    const [open, setOpen] = useState(false)
    return (
        <div key={item.name} className="flex justify-between items-center focus:text-green-900 hover:text-green-900 active:text-green-900">
            <Link href={item.href} onClick={() => setActive(!active)}>
                {item.name}
            </Link>
            <FontAwesomeIcon onClick={() => setOpen(!open)} className="px-3" rotation={open ? 90 : 0} icon={faChevronRight} />
        </div>
    )
}

export default LinkItem