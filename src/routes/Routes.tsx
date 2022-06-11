import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import Chat from '../pages/Chat/Chat'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import ChatList from '../pages/ChatList/ChatList'

const AppRoutes:React.FC = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/chat-list' element={<ChatList/>}/>
            <Route path='/chat' element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes