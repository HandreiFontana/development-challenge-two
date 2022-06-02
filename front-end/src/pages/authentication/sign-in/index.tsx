import { Alert, Box, Button, LinearProgress, Paper, TextField } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useStyles } from './styles';
import logo from '../../../assets/medcloud.svg'
import { useAuth } from '../../../hooks/auth';


interface ISignInFormData {
  email: string
  password: string
}


const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [mainError, setMainError] = useState('')

  const { signIn } = useAuth()
  const history = useHistory()
  const classes = useStyles()

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<ISignInFormData>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        setIsLoading(true)
        await signIn({
          email: data.email,
          password: data.password,
        })

        setIsLoading(false)
        history.push('/home')
      } catch (err) {
        setIsLoading(false)
        setMainError('Teste de erro')
      }
    },
    [signIn, history]
  )

  const handleChange = (formField: Error) => {
    setMainError('')
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.mainWrapper}>
        <Paper elevation={3} className={classes.paperWrapper}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            data-testid="form"
            className={classes.formBox}
          >
            <img
              src={logo}
              alt="Logo"
              className={classes.logo}
            ></img>

            <TextField
              required
              // name="email"
              id="email"
              label="Digite seu e-mail"
              type="email"
              autoFocus
              error={Boolean(errors.email)}
              {...register("email",
                { onChange: (e) => handleChange(e) }
              )}
            />

            <TextField
              required
              // name="password"
              id="password"
              label="Digite sua senha"
              type="password"
              autoComplete="new-password"
              error={Boolean(errors.password)}
              {...register("password",
                { onChange: (e) => handleChange(e) }
              )}
            />


            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ mt: 2, mb: 1 }}
            >
              Acessar
            </Button>

            {isLoading && (
              <LinearProgress className={classes.linearProgress} />
            )}

            {mainError !== '' && (
              <Alert severity="error" className={classes.alert}>{mainError}</Alert>
            )}
          </Box>
        </Paper>
      </Box >
    </Box >
  )
}

export default SignIn;