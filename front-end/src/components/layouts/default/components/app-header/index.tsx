import { AppBar, IconButton, Toolbar } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React from 'react'

import logo from 'assets/medcloud.svg'
import { useAuth } from 'hooks/auth'
import { useStyles } from './styles'

const AppHeader: React.FC = () => {

    const { signOut } = useAuth()
    const classes = useStyles()

    return (
        <AppBar position="fixed" color="inherit" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} alt="Medcloud Logo" className={classes.logo} />

                <IconButton color="inherit" onClick={signOut}>
                    <PowerSettingsNewIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader