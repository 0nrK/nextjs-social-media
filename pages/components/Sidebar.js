import React from 'react'
import Image from "next/image"
const Sidebar = () => {
    return ( 
        <div className="flex flex-col sticky top-10 left-0 h-64 w-1/5 -mt-4 bg-transparent text-gray-300 justify-center ">
            <div className="flex items-center text-xl w-auto ml-1 p-1 hover:bg-gray-500">
                <Image
                src="/person.jpeg"
                width={48}
                height={48}
                className="rounded-full"
                />
                <span className="ml-3">Will Crawford</span>
            </div>
            {/* Friends  */}
            <div className="flex items-center  p-3 hover:bg-gray-500">
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
                <span className="text-xl">Friends</span>
            </div>
            {/* Saved */}
            <div className="flex items-center p-3 hover:bg-gray-500">
                <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
                <span className="text-xl">Saved</span>
            </div>
            {/* Groups */}
            <div className="flex items-center p-3 hover:bg-gray-500">
                <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span className="text-xl">Groups</span>
            </div>
        </div>
    )
}

export default Sidebar
