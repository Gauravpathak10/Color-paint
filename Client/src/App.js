import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CanvaApp from './components/CanvaApp'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/draw' element={<CanvaApp />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App