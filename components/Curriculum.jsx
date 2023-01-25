import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Curriculum = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Box width="100%" height={'100%'} padding={10}>
                    <Box display={'flex'} justifyContent="center" color={'black'}>
                        <Typography variant="h2" color={'white'}>
                            Nicolas Minahk
                        </Typography>
                    </Box>
                    <Box sx={{ borderColor: 'gray', padding: 10 }}>
                        <Typography variant="h3" padding={5}>
                            {' '}
                            Proyectos{' '}
                        </Typography>
                        <Box display={'flex'} justifyContent="center" padding={5} alignContent="center">
                            <Typography color={'Highlight'}> RMDB Primer proyecto Full Stack Individual</Typography>
                            <Typography variant="subtitle2">
                                <br></br>
                                Tecnologías: JavaScript | MongoDb | Mongoose | React Js | Material UI | Express.js |
                                Axios.
                                <br></br>
                                Página de Películas utilizando Omdb Api, con barra de búsqueda, registro de Usuarios y
                                favoritos.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'} justifyContent="right" padding={10}>
                        <Typography color={'Highlight'}>
                            PRIMO Proyecto Colectivo <br></br>
                        </Typography>
                        <Typography>
                            <br></br>
                            Creación de un e-commerce enfocado a la venta de indumentaria, con buscador de productos,
                            reseñas, carrito y registro de Usuarios
                            <br></br>
                            Tecnologías: TypeScript | Node.js | Express.js | React.js | React-Redux | MongoDB | Mongoose
                            | MaterialUI | Redux-Toolkit
                        </Typography>
                    </Box>
                    <Box display={'flex'} justifyContent="left" padding={10}>
                        <Typography color={'Highlight'}>
                            NAMASTREK APP <br></br>Proyecto Full Stack Individual<br></br>
                        </Typography>
                        <Typography>
                            Tecnologías: JavaScript | MongoDb | Mongoose | React Native | Expo | Axios.
                            <br></br>
                            Aplicación móvil de actividades al aire libre, ABM usuarios, calendario con registro de
                            actividades y beneficios. Funcional tanto en android como en ios.
                        </Typography>
                    </Box>
                </Box>
            </header>
        </div>
    )
}

export default Curriculum
