import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },

    mainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 50px)'
    },

    paperWrapper: {
        padding: '30px',
        height: '400px',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    formBox: {
        width: '340px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    logo: {
        width: '200px',
        marginBottom: '40px'
    },

    linearProgress: {
        marginTop: '20px'
    },

    alert: {
        marginTop: '20px',
        padding: '1px 16px 1px 16px'
    },

    footer: {
        marginTop: 'auto',
        backgroundColor: '#E7EAED',
        padding: '10px 10px 15px 10px'
    },

    signupLink: {
        textAlign: 'right'
    }
}));

export { useStyles }
