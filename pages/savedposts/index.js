import React from 'react'
import Navbar from '../components/Navbar'
import OnlineList from '../components/OnlineList'
import Sidebar from '../components/Sidebar'
import SavedPosts from '../SavedPosts'

const index = () => {
    return (
        <div className="bg-gray-800 h-screen">
            <Navbar />
            <div className="flex">
                <Sidebar/>
                <SavedPosts/>
                <OnlineList/>
            </div>
        </div>
    )
}

export default index
