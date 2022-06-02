import { Box, Typography } from '@mui/material'
import React from 'react'

import logo from 'assets/logo-grande.png'

import { useStyles } from './styles'

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography variant="h2" color="primary">
        Bem-vindo!
      </Typography>
      <img src={logo} alt="Logo medcloud" className={classes.logo} />
    </Box>
  )
}

export default Home