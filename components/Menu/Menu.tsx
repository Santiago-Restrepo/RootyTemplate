import React, { useState } from 'react'
import Link from 'next/link'
import { $Page } from '@/sanity/queries/page.queries'

const Menu = ({ pages }: { pages: $Page[] }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="text-gray-800 focus:outline-none"
            >
                ☰
            </button>
            {isOpen && (
                <div className="absolute top-10 right-0 bg-white p-4 shadow-md">
                    <ul className="space-y-2">
                        {pages.map((page) => (
                            <li key={page._id}>
                                <Link href={`/${page.slug.current}`}>
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Menu
