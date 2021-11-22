import React,{useState} from 'react'
import OnlineFriend from './OnlineFriend'


const OnlineList = () => {

    const [onlineMenu, setOnlineMenu] = useState(false)

    return (
        <>
        {onlineMenu ? 
        <div 
        onClick={() => setOnlineMenu(!onlineMenu)}
        className="h-96 transition-all">
            <button 
            className="w-96 p-4 flex justify-between fixed bottom-0 right-0 rounded-lg text-white text-center text-xl bg-gray-700">
                Online Friends
                {/* Up icon */}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
            </button>
        </div>
        :
        <div 
        onClick={() => setOnlineMenu(!onlineMenu)}
        className="fixed bottom-0 right-0 rounded-lg transition-all duration-1000 h-96 bg-gray-700 text-gray-50">
            <h1 className="flex justify-between p-4 w-96 text-xl">
                Online Friends
                {/* Down icon */}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </h1>
            <div className="mt-3">
                <OnlineFriend name={"John Doe"}/>
                <OnlineFriend name={"Kyle Fotturgen"}/>
                <OnlineFriend name={"Bella Szchavic"}/>
            </div>
        </div>
        }
        </>
    )
}

export default OnlineList
