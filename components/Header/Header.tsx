// Header.js

import React from 'react'
import { $Page } from '@/sanity/queries/page.queries'
import Menu from '../Menu/Menu'

const Header = ({ pages }: { pages: $Page[] }) => {
    return (
        <header className="bg-gray-200 p-4 mb-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Mi Sitio</div>
                <Menu pages={pages} />
            </div>
        </header>
    )
}

export default Header
