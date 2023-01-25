import React from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import azul from '../azul.jpg'
import { Companies } from '../companies'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const companies = [
        {
            title: 'React',
            url: '//logo.clearbit.com/react.com',
        },
        {
            title: 'TypeScript',
            url: '//logo.clearbit.com/typescript.com',
        },
        {
            title: 'Adobe',
            url: '//logo.clearbit.com/adobe.com',
        },
        {
            title: 'JavaScript',
            url: '//logo.clearbit.com/javascript.com',
        },
    ]
    return (
        <div className="App">
            <header className="App-header">
                <img src={azul} className="App-logo" alt="logo" />
                <Box sx={{ margin: 10 }}>
                    <Typography variant="h3">Nicolas Minahk </Typography>
                    <Typography variant="subtitle1">Full Stack Web Developer</Typography>
                    <Typography variant="caption" fontSize={'15px'}>
                        El mundo de la comunicación y sus tecnologías me atrapó desde mi niñez.
                        <br></br>
                        Soy desarrollador y realizador Audiovisual
                    </Typography>
                </Box>
                <Typography>Click aquí por:</Typography>
                <Button onClick={() => navigate('/cv')} size="large">
                    PROYECTOS
                </Button>
                <Box display="flex" flexDirection={'row'}>
                    <a style={{ color: 'white', marginRight: '15px' }} href="https://github.com/nicolasminahk">
                        <GitHubIcon color="white" fontSize="large" />
                    </a>
                    <a style={{ color: 'white' }} href="https://www.linkedin.com/in/nicolas-minahk/">
                        <LinkedInIcon color="white" fontSize="large" />
                    </a>
                </Box>
                <Box sx={{ marginTop: '50px', marginRight: '110px', paddingBottom: 10 }}>
                    <Companies companies={companies} />
                </Box>
            </header>
        </div>
    )
}

export default Home
