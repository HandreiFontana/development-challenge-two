import React, { useEffect, useState } from 'react'
import { Paper } from '@mui/material'
import ListIcon from '@mui/icons-material/List'

import { ITableHeadCell, ICustomerDTO } from 'data/dtos'
import api from 'services/api'

import { useStyles } from './styles'
import { FormHeader } from 'components/form-header'
import { CustomTable } from 'components/custom-table'

const headCells: ITableHeadCell[] = [
  {
    id: 'name',
    label: 'Nome',
    width: 2
  },
  {
    id: 'email',
    label: 'E-mail',
    width: 4
  },
  {
    id: 'address',
    label: 'Endereço',
    width: 4
  },
  {
    id: 'birthdate',
    label: 'Nascimento',
    width: 1
  },
]

const CustomersList: React.FC = () => {
  const [loading, setLoading] = useState(0)
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [customersList, setCustomersList] = useState<ICustomerDTO[]>([])
  const [recordToDelete, setRecordToDelete] = useState<string | null>('')

  const classes = useStyles()

  const loadCustomers = async () => {
    setLoading(1)

    await api
      .post('/customers/list', { page, rowsPerPage })
      .then(async listResponse => {
        const { data } = listResponse

        setCustomersList(data)
      })
      .then(() => setLoading(0))
      .catch(error => {
        console.log(error)
      })
  }

  const handleDelete = async () => {
    await api
      .delete(`/customers/${recordToDelete}`)
      .then(async () => {
        await loadCustomers()
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number,) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    loadCustomers()
  }, [page, rowsPerPage])



  return (
    <Paper elevation={3} className={classes.paper}>

      <FormHeader
        title="Pacientes"
        icon={ListIcon}
        newRoute="/customers/new"
        helpText="Nesta opção serão informadas os pacientes, com seu email, seu endereço e sua data de nascimento."
      />

      <CustomTable
        headCells={headCells}
        rows={customersList}
        isLoading={loading}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        page={page}
        editRoute="/customers/edit"
        handleDelete={handleDelete}
        handleRecordToDelete={setRecordToDelete}
      />

    </Paper>
  )
}

export default CustomersList