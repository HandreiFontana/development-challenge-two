import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Grid, Paper, TextField } from '@mui/material'
import ListIcon from '@mui/icons-material/List'

import { ICustomerDTO } from 'data/dtos'
import api from 'services/api'

import { useStyles } from './styles'
import { FormHeader } from 'components/form-header'
import { FormAlert } from 'components/form-alert'
import convertDate from 'utils/convert-date'

interface IRouteParams {
  id: string
}

const CustomerForm: React.FC = () => {
  const [mainError, setMainError] = useState('')

  const params = useParams<IRouteParams>()
  const firstInputElement = useRef(null)
  const classes = useStyles()
  const history = useHistory()

  const validationSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email().required('E-mail obrigatório'),
    address: yup.string().required('Endereço obrigatório'),
    birthDateUnformatted: yup.string().required('Data de nascimento obrigatório'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICustomerDTO>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      birthDateUnformatted: ''
    }
  })

  useEffect(() => {
    async function loadData() {
    }

    loadData()
  }, [])

  useEffect(() => {
    async function loadData() {
      const { id } = params

      await api
        .get(`/customers/${id}`)
        .then(response => {
          const { data } = response

          const birthDateUnformatted = convertDate(data)

          const customerResult = {
            name: data.name,
            email: data.email,
            address: data.address,
            birthDateUnformatted: birthDateUnformatted,
          }

          return customerResult
        })
        .then((stateResult: ICustomerDTO) => {
          reset(stateResult)
        })
        .catch(error => {
          console.log(error)
          return error
        })
    }

    if (params.id) {
      loadData()
    }
  }, [params, params.id, reset])

  const onSubmit = useCallback(async (data: ICustomerDTO) => {
    const payLoad: ICustomerDTO = {
      name: data.name,
      email: data.email,
      address: data.address,
      birthDateUnformatted: data.birthDateUnformatted,
    }

    console.log(payLoad)

    if (params.id) {
      const { id } = params

      payLoad.id = id

      await api
        .put(`/customers/${id}`, payLoad)
        .then(history.push('/customers'))
        .then(() => setTimeout(() => { firstInputElement.current.focus() }, 0))
        .catch(error => {
          console.log(error.response.data)
          setMainError(error.response.data.data.name)
          return error.response.data.data
        })
    } else {
      await api
        .post('/customers', payLoad)
        .then(history.push('/customers'))
        .then(() => reset())
        .then(() => setTimeout(() => { firstInputElement.current.focus() }, 0))
        .catch(error => {
          console.log(error.response.data)
          setMainError(error.response.data.data.name)
          return error.response.data.data
        })
    }
  }, [])

  const handleChange = (formField) => {
    setMainError('')
  }

  return (
    <Paper elevation={3} className={classes.paper}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        data-testid="form"
      >
        <FormHeader
          title="Pacientes"
          icon={ListIcon}
          backRoute="/customers"
          showSaveButton={true}
          helpText="Nesta opção serão informadas os dados do novo paciente."
        />

        <FormAlert setMainError={setMainError} mainError={mainError} />

        <Grid container spacing={0} className={classes.formContainer}>

          <Grid container item xs={6} spacing={1}>
            <Grid item xs={11}>
              <TextField
                id="name"
                name="name"
                label="Nome"
                error={!!errors.name}
                helperText={errors?.name?.message}
                variant="filled"
                margin="dense"
                size="small"
                fullWidth={true}
                autoFocus
                inputRef={firstInputElement}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  maxLength: 60
                }}
                {...register("name",
                  { onChange: (e) => handleChange(e) }
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={6} spacing={1}>
            <Grid item xs={11}>
              <TextField
                id="email"
                name="email"
                label="E-Mail"
                error={!!errors.email}
                helperText={errors?.email?.message}
                variant="filled"
                margin="dense"
                size="small"
                fullWidth={true}
                {...register("email",
                  { onChange: (e) => handleChange(e) }
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={8} spacing={1}>
            <Grid item xs={11}>
              <TextField
                id="address"
                name="address"
                label="Endereço"
                error={!!errors.address}
                helperText={errors?.address?.message}
                variant="filled"
                margin="dense"
                size="small"
                fullWidth={true}
                {...register("address",
                  { onChange: (e) => handleChange(e) }
                )}
              />
            </Grid>
          </Grid>

          <Grid container item xs={4} spacing={1}>
            <Grid item xs={12}>
              <TextField
                id="birthDateUnformatted"
                name="birthDateUnformatted"
                label="Data de nascimento"
                error={!!errors.birthDateUnformatted}
                helperText={errors?.birthDateUnformatted?.message}
                variant="filled"
                margin="dense"
                size="small"
                fullWidth={true}
                {...register("birthDateUnformatted",
                  { onChange: (e) => handleChange(e) }
                )}
              />
            </Grid>
          </Grid>

        </Grid>
      </Box>
    </Paper>
  )
}

export default CustomerForm