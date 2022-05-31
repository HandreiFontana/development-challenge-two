import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Collapse, List, ListItem, ListItemIcon, ListItemText, SvgIconProps } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import DefaultLayoutContext from 'components/layouts/default/components/context'
import { useStyles } from './styles'

interface ISubMenuOption {
    id: string
    icon: React.ReactElement<SvgIconProps>
    text: string
    route: string
}

interface IMenuOption {
    id: string
    icon: React.ReactElement<SvgIconProps>
    text: string
    route: string
    subMenuOptions: ISubMenuOption[]
}

interface IMenuProps {
    options: IMenuOption[]
}


const SideMenu: React.FC<IMenuProps> = ({ options }) => {
    const { state } = useContext(DefaultLayoutContext)
    const { isDrawerOpen } = state
    const [currentItem, setCurrentItem] = useState('')

    const classes = useStyles(isDrawerOpen)
    const history = useHistory()

    const handleClick = (item) => {
        if (currentItem === item) {
            setCurrentItem('')
        } else {
            setCurrentItem(item)
        }
    }

    useEffect(() => { }, [currentItem])

    const renderSubMenu = (subMenuOptions) => {
        return (
            subMenuOptions.map(({ id, icon, text, route }) => (
                <ListItem key={id} button className={classes.nested} onClick={() => history.push(route)} >
                    <ListItemIcon className={icon !== null ? classes.nestedIcon : classes.nestedIconNull}>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} className={classes.nestedText} />
                </ListItem>
            ))
        )
    }

    return (
        <Box className={isDrawerOpen ? classes.leftMenuOpen : classes.leftMenuClose}>
            <Box className={classes.menuContainer}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {options.map(({ id, icon, text, route, subMenuOptions }) => (
                        <div>
                            {subMenuOptions.length > 0 ? (
                                <ListItem key={id} button className={classes.menuOption} onClick={() => handleClick(id)}>
                                    <ListItemIcon className={classes.menuOptionIcon} >
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                    {isDrawerOpen ? currentItem === id ? <ExpandLess /> : <ExpandMore /> : null}
                                </ListItem>
                            ) : (
                                <ListItem key={id} button className={classes.menuOption} onClick={() => history.push(route)} >
                                    <ListItemIcon className={classes.menuOptionIcon} >
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )}

                            <Collapse in={currentItem === id} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {renderSubMenu(subMenuOptions)}
                                    {subMenuOptions.length > 0 ? <div className={classes.lastItem}>&nbsp;</div> : ""}
                                </List>
                            </Collapse>
                        </div>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default SideMenu