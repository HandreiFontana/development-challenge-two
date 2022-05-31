import React from 'react'
import { useHistory } from 'react-router-dom'
import { SvgIconComponent } from '@mui/icons-material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Typography, Box, Button, Tooltip } from '@mui/material'
import { useStyles } from './styles'

type Props = {
    icon?: SvgIconComponent,
    title: string,
    newRoute?: string,
    backRoute?: string,
    showSaveButton?: boolean,
    helpText?: string
}

const renderNewButton = (history: any, route?: string) => {
    if (typeof route !== 'undefined') {
        return <Button variant="contained" color="primary" onClick={() => history.push(route)}>Novo</Button>
    }
}

const renderBackButton = (history: any, route?: string) => {
    if (typeof route !== 'undefined') {
        return <Button variant="contained" color="primary" onClick={() => history.push(route)} style={{ marginLeft: 10 }} >Retornar</Button>
    }
}

const renderSaveButton = (showButton?: boolean) => {
    if (typeof showButton !== 'undefined') {
        if (showButton) {
            return <Button type="submit" variant="contained" color="primary">Salvar</Button>
        }
    }
}

const renderHelpIcon = (classes: any, helpText?: string) => {
    if (typeof helpText !== 'undefined') {
        if (helpText) {
            return (
                <Tooltip title={helpText} placement="right" arrow={true} >
                    <HelpOutlineIcon className={classes.formTitleHelpIcon} />
                </Tooltip>
            )
        }
    }
}

const FormHeader: React.FC<Props> = ({
    icon,
    title,
    newRoute,
    backRoute,
    showSaveButton,
    helpText
}: Props) => {
    const FormIcon = icon

    const classes = useStyles()
    const history = useHistory()

    return (
        <Typography variant="h5" className={classes.formTitle}>
            <Box className={classes.formTitleLeft}>
                <FormIcon fontSize="large" className={classes.formTitleLeftIcon} />
                {title}
                {renderHelpIcon(classes, helpText)}
            </Box>
            <Box className={classes.formButtonsRight}>
                {renderNewButton(history, newRoute)}
                {renderSaveButton(showSaveButton)}
                {renderBackButton(history, backRoute)}
            </Box>
        </Typography>
    )
}

export { FormHeader }
