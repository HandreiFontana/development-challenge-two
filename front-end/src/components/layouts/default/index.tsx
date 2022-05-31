import React, { useState } from 'react'
import { Box, SvgIconProps } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import SchoolIcon from '@mui/icons-material/School'

import { SideMenu, AppHeader, DefaultLayoutContext } from './components'
import { useStyles } from './styles'


interface SubMenuOption {
    id: string
    icon: React.ReactElement<SvgIconProps>
    text: string
    route: string
}

export interface MenuOption {
    id: string
    icon: React.ReactElement<SvgIconProps>
    text: string
    route: string
    subMenuOptions: SubMenuOption[]
}


const DefaultLayout: React.FC = ({ children }) => {
    const [state, setState] = useState({
        isDrawerOpen: true
    })

    const { isDrawerOpen } = state

    const options: MenuOption[] = [
        { id: '000', icon: <HomeIcon />, text: 'Home', route: '/home', subMenuOptions: [] },
        {
            id: '001', icon: <GroupIcon />, text: 'Usuários', route: '', subMenuOptions: [
                { id: '001001', icon: <PersonIcon />, text: 'Pacientes', route: '/customers' },
                { id: '001002', icon: <SchoolIcon />, text: 'Médicos', route: '/doctors' },
            ]
        },
        { id: '002', icon: <AccessAlarmIcon />, text: 'Exames', route: '/exams', subMenuOptions: [] },
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