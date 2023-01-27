import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Curriculum from './Curriculum'
import Home from './Home'

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<Curriculum />} />
            </Routes>
        </Fragment>
    )
}

export default App
