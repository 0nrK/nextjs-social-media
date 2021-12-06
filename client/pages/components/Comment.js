import React, { useState } from 'react'
import Image from 'next/dist/client/image'

const Comment = () => {

    const [hasLiked, setHasLiked] = useState(false)

    const handleLike = () => {
        setHasLiked(!hasLiked)
    }

    return (
        <>
            <div className="flex flex-col h-auto p-1 mt-3 ">
                <div className="flex rounded-xl w-full">
                    <div className="p-1 w-16">
                        <Image
                            src="/friend2.jpeg"
                            alt="userpp"
                            width={56}
                            height={56}
                            className="rounded-full cursor-pointer"
                        />
                    </div>
                    <div className="bg-gray-600 rounded-lg w-5/6">
                        <div className="flex flex-col text-xs pt-1 ml-3 w-5/6">
                            <div className="flex flex-col justify-between">
                                <span className="text-2xl cursor-pointer font-bold">Mike Dorsey</span>
                            </div>
                            <span className="text-xl text-white p-1 pb-3 break-words">AAAAAAAAAAAAAAAAAAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaaaAAAAAAAAAAAA</span>
                        </div>
                    </div>
                </div>
                <div className="flex ml-16  justify-between items-center">
                    <div className="ml-1 mt-3">
                        <button className={hasLiked ? "mr-3 text-2xl text-green-600 " : "mr-3 text-2xl"} onClick={handleLike}>Like</button>
                        <span className="text-2xl mr-3">·</span>
                        <span className="text-2xl">5m</span>
                    </div>
                    <div className="mr-16 flex">
                        <svg className={hasLiked ? "w-6 h-6 text-green-600" : "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                        <span className="text-xl ml-1">7</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
