'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
    {
        name: 'Portfolio',
        href: '/#portfolio',
    },
    {
        name: 'Blog',
        href: '/blogs',
    },
    // {
    //     name: 'Contact',
    //     href: '#',
    // },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="relative container mx-auto px-12 p-4 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="inline-flex items-center mt-2">
                    <span>
                        <a href="/">
                            <Image src='/img/logo-nav.png' width='150' height='150'></Image>
                        </a>
                    </span>
                </div>
                <div className="hidden grow items-start lg:flex">
                    <ul className="ml-12 inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="font-semibold text-gray-800 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    <Link
                        href={'/#contact'}
                        className="p-3 px-5 font-semibold text-white bg-primary  rounded-full S hover:bg-primaryDark"
                    >
                        Contact Us
                    </Link>
                </div>

                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer text-primary" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <a href="/">
                                            <Image src='/img/logo-nav.png' width='130' height='100' className='ml-2'></Image>
                                        </a>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6 mb-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <Link
                                    href={'/#contact'}
                                    className="p-3 px-5 font-semibold text-white bg-primary  rounded-full shadow-lg hover:bg-primaryDark"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
