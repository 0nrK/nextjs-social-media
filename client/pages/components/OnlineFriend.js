import React from 'react'
import Image from "next/image"



const OnlineFriend = ({name}) => {
    return (
        <div className="flex h-14 w-full pl-2 items-center  hover:bg-gray-500">
                <Image
                src="/friend1.jpeg"
                alt="friend1pp"
                width={36}
                height={36}
                className="rounded-full"
                />
                <div className="relative -left-2 top-4 h-2 w-2 rounded-full  bg-green-800">

                </div>
                <span className="">{name}</span>
        </div>
    )
}

export default OnlineFriend
