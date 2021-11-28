import React from 'react'
import AccountMenu from './AccountMenu'
import Feed from './Feed'
import Input from './Input'
import Navbar from './Navbar'
import OnlineList from './OnlineList'
import Sidebar from './Sidebar'

const MainPage = () => {
    return (
        <div className="bg-gray-800">
            <AccountMenu/>
            <div className="flex">
                <Sidebar/>
                <Feed/>
                <OnlineList/>
            </div>
        </div>
    )
}

export default MainPage
