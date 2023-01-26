import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Curriculum from './components/Curriculum'
import Home from './components/Home'

function App() {
    console.log('Deploy')
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
