import React, { useState } from 'react'
import { Box, SvgIconProps } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

import { SideMenu, AppHeader, DefaultLayoutContext } from './components'
import { useStyles } from './styles'

export interface MenuOption {
    id: string
    icon: React.ReactElement<SvgIconProps>
    text: string
    route: string
}


const DefaultLayout: React.FC = ({ children }) => {
    const [state, setState] = useState({
        isDrawerOpen: true
    })

    const { isDrawerOpen } = state

    const options: MenuOption[] = [
        { id: '000', icon: <HomeIcon />, text: 'Home', route: '/home' },
        { id: '001', icon: <HomeIcon />, text: 'Pacientes', route: '/home' },
        { id: '002', icon: <HomeIcon />, text: 'Médicos', route: '/home' },
        { id: '002', icon: <HomeIcon />, text: 'Exames', route: '/home' }
    ]

    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <DefaultLayoutContext.Provider value={{ state, setState }}>
                <AppHeader />
                <SideMenu options={options} />
                <Box className={`${classes.mainContentWrapper} ${isDrawerOpen ? classes.mainContentWrapperOpen : classes.mainContentWrapperClose}`}>
                    {children}
                </Box>
            </DefaultLayoutContext.Provider>
        </Box>
    )
}

export default DefaultLayout