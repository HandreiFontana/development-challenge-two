import { createTheme } from '@mui/material/styles'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#002639',
      light: '#009ADF',
    },

    background: {
      default: "#F5F5F5"
    }
  },

  typography: {
    allVariants: {
      color: "#757575"
    },

    h4: {
      fontWeight: "bold",
    },

    button: {
      textTransform: 'none'
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
          backgroundColor: 'white',
          borderRadius: '5px',
          paddingLeft: '5px',
          paddingRight: '5px',
        },
        '.MuiOutlinedInput-root': {
          height: '2.1em',
        },
        '*::-webkit-scrollbar': {
          backgroundColor: '#F5F5F5',
          width: '0.3em'
        },
        '*::-webkit-scrollbar-track': {
          WebkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)'
        },
        '.MuiToolbar-root.MuiToolbar-gutters': {
          paddingLeft: 0,
          marginLeft: 0,
        },
        '.MuiTableCell-root':
        {
          borderBottom: 'none !important',
          padding: '0px !important',
          alignItems: 'center',
          lineHeight: '1.8rem !important'
        },
        '.MuiTableCell-head':
        {
          lineHeight: '2.5rem !important'
        },
        '.MuiGrid-item': {
          flexGrow: 1
        }
      }
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        margin: 'dense',
        autoComplete: 'off',
        fullWidth: true,
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            transitionDelay: "9999s",
            transitionProperty: "background-color, color",
          },
        },
      },
    },

    MuiInputLabel: {
      defaultProps: {
        shrink: true
      }
    },

    MuiButtonBase: {
      defaultProps: {

      }
    },

    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: '#002639',
        },
        tooltip: {
          backgroundColor: '#002639',
          fontSize: '0.9em'
        }
      }
    }
  },

  zIndex: {
    appBar: 1200,
    drawer: 1100
  },

  transitions: {
    duration: {
      standard: 300,
    }
  }
})
