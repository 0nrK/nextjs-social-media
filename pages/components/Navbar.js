import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)




    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <>
        <nav className="bg-gray-700 z-50 sticky top-0 left-0 p-2 text-gray-400 flex justify-between">
            {/* First part of nav */}
            <div className="flex items-center">
                {/* Facebook Logo */}
                <Link href="/">
                    <Image
                        src="/fblogo.png"
                        alt="facebook logo"
                        width={44}
                        height={44}
                        className="cursor-pointer"
                    />
                </Link>
                {/* Search icon */}
                <div className="flex items-center rounded-full w-auto h-9 bg-gray-800">
                    <div className="p-2 text-gray-400">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input
                        className="bg-transparent text-gray-400 focus:outline-none"
                        placeholder="Search on Facebook"
                        type="search" />
                </div>
            </div>
            {/* Middle  part of nav*/}
            <div className="flex">
                {/* Home icon */}
                <div className="flex text-blue-700 border-b-4 border-blue-700 items-center justify-center w-20 h-auto hover:bg-gray-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                </div>
                {/* Friends icon */}
                <div className="flex items-center justify-center w-20 h-auto hover:bg-gray-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
                {/* Watch icon */}
                <div className="flex items-center justify-center w-20 h-auto hover:bg-gray-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                </div>
            </div>
            {/* Last part of nav */}
            <div className="flex items-center">
                {/* User pp and name */}
                <div className="flex items-center">
                    <Image
                        src="/person.jpeg"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                    <span className="ml-1 mr-3 text-white text-l">Will</span>
                </div>
                {/* Messages icon */}
                <div className="flex items-center  cursor-pointer rounded-full justify-center w-12 h-12 hover:bg-gray-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                </div>
                {/* Notifies icon */}
                <div className="flex items-center  cursor-pointer rounded-full justify-center w-12 h-12 hover:bg-gray-500">
                    <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                </div>
                {/* Account icon */}
                <div
                    onClick={handleMenu}
                    className="flex items-center cursor-pointer rounded-full justify-center w-12 h-12 hover:bg-gray-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>

        </nav>

        {openMenu && 
        <div className="absolute top-18 right-0  w-64">
            <div className="flex flex-col">
                <span className="p-3 bg-gray-700 text-white cursor-pointer hover:bg-gray-600">Options</span>
                <span className="p-3 bg-gray-700 text-white cursor-pointer hover:bg-gray-600">Help</span>
                <span className="p-3 bg-gray-700 text-white cursor-pointer hover:bg-gray-600">Logout</span>
            </div>
        </div>}
        </>
    )
}

export default Navbar
