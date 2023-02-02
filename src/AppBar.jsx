import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: '#4E0A54' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Porfolio
                    </Typography>
                    <Box display="flex" flexDirection={'row'}>
                        <a style={{ color: 'white', marginRight: '15px' }} href="https://github.com/nicolasminahk">
                            <GitHubIcon color="white" fontSize="large" />
                        </a>
                        <a style={{ color: 'white' }} href="https://www.linkedin.com/in/nicolas-minahk/">
                            <LinkedInIcon color="white" fontSize="large" />
                        </a>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
