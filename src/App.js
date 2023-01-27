import { Typography } from '@mui/material'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Curriculum from './Curriculum'
import Home from './Home'

function App() {
    return (
        <Fragment>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<Curriculum />} />
            </Routes> */}
            <div>
                <Typography>Hola</Typography>
            </div>
        </Fragment>
    )
}

export default App
