import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: '20px',
    minHeight: 'calc(100vh - 120px)',
    maxHeight: 'calc(100vh - 120px)',
    height: 'calc(100vh - 120px)',
    width: '100%'
  },

  formTitle: {
    display: 'flex',
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.primary.main
  },

  tableContainer: {
    height: 'calc(100vh - 260px)',
  },

  inputInput: {
    padding: '5px 15px 5px 15px',
    width: '100%'
  },

  linearProgressOn: {
    marginRight: '15px',
    width: '100%'
  },

  linearProgressOff: {
    visibility: 'hidden',
  },

  tablePaper: {
    width: '100%',
    overflow: 'hidden'
  },

  editIcon: {
    fontSize: 20,
    cursor: 'pointer',
    color: theme.palette.primary.main,
    margin: '6px 10px 0 10px'
  },

  deleteIcon: {
    fontSize: 20,
    cursor: 'pointer',
    color: theme.palette.primary.main,
    margin: '6px 10px 0 0px'
  },

  rowTableIcon: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    minWidth: '25px',
    width: '25px',
  },

  tableRow: {
    borderBottom: '1px solid black !important'
  },

  pagination: {
    marginTop: 'calc(100vh - 312px)',
  }
}))

export { useStyles }
