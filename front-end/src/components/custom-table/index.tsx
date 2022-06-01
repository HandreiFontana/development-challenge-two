import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Paper, TablePagination, LinearProgress } from '@mui/material'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from '@mui/material'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import { ITableHeadCell } from 'data/dtos'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useStyles } from './styles'

type Props = {
    headCells: ITableHeadCell[],
    rows: any[],
    totalRows: number,
    isLoading: number,
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => Promise<void>,
    rowsPerPage: number,
    handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number,) => void,
    page: number,
    editRoute: string,
    handleDelete: () => void,
    handleRecordToDelete: React.Dispatch<React.SetStateAction<string>>,
}

const CustomTable: React.FC<Props> = ({
    headCells,
    rows,
    totalRows,
    isLoading,
    handleChangeRowsPerPage,
    rowsPerPage,
    handleChangePage,
    page,
    editRoute,
    handleDelete,
    handleRecordToDelete,
}: Props) => {
    const [open, setOpen] = useState(false)

    const classes = useStyles()
    const history = useHistory()
    const defaultWidth = (headCells.length > 1 ? 100 / headCells.length : 100)

    const handleClickOpen = (record: string) => {
        setOpen(true)
        handleRecordToDelete(record)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseDelete = () => {
        setOpen(false)
        handleDelete()
    }

    return (
        <>
            <div className={isLoading === 1 ? classes.linearProgressOn : classes.linearProgressOff}>
                <LinearProgress />
            </div>

            <Paper className={classes.tablePaper}>
                <TableContainer className={classes.tableContainer}>
                    <Table stickyHeader>

                        <TableHead >
                            <TableRow>
                                <TableCell className={classes.rowTableIcon}>&nbsp;</TableCell>
                                <TableCell className={classes.rowTableIcon}>&nbsp;</TableCell>

                                {headCells.map((headCell, index) => (
                                    <TableCell align="left" style={{ width: `${typeof (headCell.width) !== 'undefined' ? (headCell.width * 100 / 11) : defaultWidth}%`, fontWeight: 'bold' }}>
                                        {headCell.label}
                                    </TableCell>
                                ))}

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row) => (
                                <TableRow hover >
                                    <TableCell className={classes.rowTableIcon}><EditIcon className={classes.editIcon} onClick={() => history.push(`${editRoute}/${row.id}`)} /></TableCell>
                                    <TableCell className={classes.rowTableIcon}><DeleteIcon className={classes.deleteIcon} onClick={() => handleClickOpen(row.id)} /></TableCell>
                                    {headCells.map((headCell) => (
                                        <TableCell align="left" style={{ minWidth: 100 }}>
                                            {
                                                headCell.id.includes('.')
                                                    ? row[headCell.id.split('.')[0]][headCell.id.split('.')[1]]
                                                    : row[headCell.id]
                                            }
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    count={totalRows}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage="Linhas por página"
                    labelDisplayedRows={({ from, to, count }) => `Página ${page + 1}, ${from}-${to} de ${count}`}
                />
            </Paper>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Exclusão de Registro</DialogTitle>

                <DialogContent style={{ width: '500px' }}>
                    <DialogContentText id="alert-dialog-description">
                        Deseja realmente excluir o registro?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Não</Button>
                    <Button onClick={handleCloseDelete} variant="contained">Sim</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export { CustomTable }
