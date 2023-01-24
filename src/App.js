import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub'
import './App.css'
import azul from './azul.jpg'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={azul} className="App-logo" alt="logo" />

                <Box sx={{ margin: 10 }}>
                    <Typography variant="h3">Nicolas Minahk </Typography>
                    <Typography variant="subtitle1">Full Stack Web Developer</Typography>
                </Box>
                <Box>
                    <a style={{ color: 'white' }} href="https://github.com/nicolasminahk">
                        <GitHubIcon color="white" />
                    </a>
                </Box>
            </header>
        </div>
    )
}

export default App
