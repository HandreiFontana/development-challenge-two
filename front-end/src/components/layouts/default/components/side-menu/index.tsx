import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, List, ListItem, ListItemIcon, ListItemText, SvgIconProps } from '@mui/material'

import DefaultLayoutContext from 'components/layouts/default/components/context'
import { useStyles } from './styles'


interface IMenuOption {
    id: string
    icon: React.ReactElement<SvgIconProps>
    text: string
    route: string
}

interface IMenuProps {
    options: IMenuOption[]
}


const SideMenu: React.FC<IMenuProps> = ({ options }) => {
    const { state } = useContext(DefaultLayoutContext)
    const { isDrawerOpen } = state
    // const [currentItem, setCurrentItem] = useState('')

    const classes = useStyles(isDrawerOpen)
    const history = useHistory()

    // const handleClick = (item) => {
    //     if (currentItem === item) {
    //         setCurrentItem('')
    //     } else {
    //         setCurrentItem(item)
    //     }
    // }

    // useEffect(() => { }, [currentItem])

    return (
        <Box className={isDrawerOpen ? classes.leftMenuOpen : classes.leftMenuClose}>
            <Box className={classes.menuContainer}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {options.map(({ id, icon, text, route }) => (
                        <ListItem key={id} button className={classes.nested} onClick={() => history.push(route)} >
                            <ListItemIcon className={classes.nestedIcon}>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} className={classes.nestedText} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default SideMenu