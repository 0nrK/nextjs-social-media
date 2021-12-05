import React,{useState , useRef} from 'react'
import Image from "next/image"
import Comment from './Comment'
import { useDispatch } from 'react-redux'


const Post = ({name, id, content}) => {
    const [hasLiked,setHasLiked] = useState(false)
    const [saved, setSaved] = useState(false)


    const handleLike = () => {
        setHasLiked(!hasLiked)
    }

    const savePost = () => {
        setSaved(!saved)
    }

    const inputRef = useRef(null)


    const handleFocus = () => {
        inputRef.current.focus()
    }

 
    return (
        <article className="relative top-0 rounded-md right-30 pt-5 w-3/5 mt-12 bg-gray-700 text-gray-300 max-w-7xl">
            <div className="flex justify-between">
                <div className="flex ml-3">
                    <Image
                    src="/friend2.jpeg"
                    alt="userpp"
                    width={56}
                    height={56}
                    className="rounded-full"
                    />
                    <div className="flex flex-col ml-3">
                        <span className="text-xl font-bold">{name}</span>
                        <span className="text-sm">3 days ago</span>
                    </div>
                </div>
                {/* Save icon */}
                <div onClick={savePost} className={saved ? "text-green-500 flex items-center justify-center mr-8 h-12 w-12 rounded-full  hover:bg-gray-500 ":"flex items-center justify-center mr-8 h-12 w-12 rounded-full  hover:bg-gray-500"}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                </div>
            </div>
            <div className="m-3 ml-5 h-auto text-2xl">
                <p>{content}</p>
            </div>
            <div className="flex justify-between mt-5">
                {/* Like button */}
                <button 
                onClick={handleLike}
                className={hasLiked ? "flex items-center justify-center text-green-600 w-1/3" 
                :
                "flex items-center justify-center  w-1/3 hover:bg-gray-500"}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                    </svg>
                </button>
                {/* Comment button */}
                <button onClick={handleFocus} className="flex items-center justify-center h-12 w-1/3 hover:bg-gray-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                </button>
                {/* Share button */}
                <button className="flex items-center justify-center h-12 w-1/3  hover:bg-gray-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                </button>
            </div>
            <div>
                <Comment/>
            </div>
            <div className="flex items-center justify-center p-3  h-auto">
                {/* Pen icon */}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
                <input 
                ref={inputRef}
                className="w-full ml-3 p-3 rounded-lg text-xl overflow-clip overflow-hidden ring-blue-900 h-auto border-0 bg-transparent"
                type="text" placeholder="Write your comment">
                </input>

            </div>
        </article>
    )
}

export default Post
