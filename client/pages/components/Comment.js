import React,{useState} from 'react'
import Image from 'next/dist/client/image'

const Comment = () => {

    const [hasLiked, setHasLiked] = useState(false)

    const handleLike = () => {
        setHasLiked(!hasLiked)
    }

    return (
        <>
        <div className="flex flex-col h-auto p-1 mt-3 bg-gray-600">
            <div className="flex  rounded-xl">
                    <div className="p-1 ">
                        <Image
                        src="/friend2.jpeg"
                        alt="userpp"
                        width={56}
                        height={56}
                        className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col text-xs ml-3 w-5/6">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold pt-1 ">Mike Dorsey</span>
                            <span className="text-xl text-gray-400 pt-1">5 minutes ago</span>
                        </div>
                            <span className="text-xl text-white p-1 break-words">AAAAAAAAAAAAAAAAAAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaAAAAaaaaAAAAAAAAAAAA</span>
                    </div>
                    {/*  <div onClick={handleLike} className="h-16 w-24 relative top-3 right-0  flex items-center justify-center bg-gray-800 rounded-full ml-52 hover:scale-105">
                        <button>
                            <svg className={hasLiked ? "w-6 h-6 text-green-600" : "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                            </svg>
                        </button>
                    </div>  */}
            </div>
                <div className="flex ml-16 items-center">
                    <div className="w-20 flex justify-center bg-gray-800">
                        <button className={hasLiked ? "mr-3 text-2xl text-green-600 " : "mr-3 text-2xl"} onClick={handleLike}>Like</button>
                    </div>
                    <div className="ml-3 ">
                        <svg className={hasLiked ? "w-6 h-6 text-green-600" : "w-6 h-6"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Comment
