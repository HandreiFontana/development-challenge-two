import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const drawerWidthOpen = 320
const drawerWidthClosed = 65

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },

  menuContainer: {
    overfloY: 'auto',
    overflowX: 'hidden',
    marginTop: '70px',
  },

  leftMenuOpen: {
    background: 'white',
    whiteSpace: 'nowrap',
    width: `${drawerWidthOpen}px`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    }),
    overflowX: 'hidden',
    overflowY: 'hidden',
    '&:hover': {
      overflowY: 'auto',
    },
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    boxShadow: '10px 0 5px -5px rgb(0 0 0 / 3%)'
  },

  leftMenuClose: {
    background: theme.palette.primary.main,
    overflowX: 'hidden',
    width: `${drawerWidthClosed}px`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.up('sm')]: {
      width: `${drawerWidthClosed}px`,
    },
    boxShadow: '10px 0 5px -5px rgb(0 0 0 / 3%)'
  },

  menuOption: {
    marginTop: '5px !important',
    marginBottom: '0px !important',
    paddingTop: '5px !important',
    paddingBottom: '5px !important'
  },

  menuOptionIcon: {
    minWidth: '40px !important',
    '& .MuiSvgIcon-root': {
      fontSize: '2rem'
    },
  },

  nested: {
    paddingLeft: '55px !important',
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
  },

  nestedIcon: {
    minWidth: '30px !important',
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem'
    },
  },

  nestedIconNull: {
    minWidth: '0px !important',
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem'
    },
  },

  nestedText: {
    paddingTop: '4px',
    lineHeight: '1 !important',
    margin: '0 !important'
  },

  lastItem: {
    lineHeight: 0.9,
    padding: 0,
    margin: 0
  }
}));

export { useStyles }
