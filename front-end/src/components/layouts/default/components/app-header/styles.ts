import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appbar: {
            display: 'flex',
            alignItems: 'center',
            height: '60px'
        },
        toolbar: {
            width: "800px",
            display: 'flex',
            justifyContent: 'space-between'
        },
        logo: {
            height: "40px",
        }
    }),
)

export { useStyles }
