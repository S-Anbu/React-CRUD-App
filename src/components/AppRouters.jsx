import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Add from './Add'
import Editing from './Editing'

const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App />} />
                <Route path='create/' element={<Add />} />
                <Route path='update/:id' element={<Editing />} />
            </Routes >
        </BrowserRouter>
    )
}

export default AppRouters