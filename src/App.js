import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Curriculum from './components/Curriculum'
import Home from './components/Home'

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cv" element={<Curriculum />} />
            </Routes>
        </Fragment>
    )
}

export default App
