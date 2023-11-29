import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ChatLoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import ChatRoom from './ChatRoom'

const Home = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ChatLoginPage/>}/>
                <Route path='RegisterPage' element={<RegisterPage/>}/>
                <Route path='ChatRoom' element={<ChatRoom/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Home
