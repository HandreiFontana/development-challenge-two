import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        paddingTop: "40px",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    logo: {
        width: "400px",
        marginTop: "60px",
    }
}))

export { useStyles }
