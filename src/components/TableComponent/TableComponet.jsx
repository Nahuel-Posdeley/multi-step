import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TableComponent = ({
    children
}) => {
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight: 'bold'}}>First Name</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>Last Name</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>Contact Number</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>Email Addres</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>Country</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>District</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>City</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>Landmark</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>Postal Code</TableCell>
                </TableRow>
                
            </TableHead>
            <TableBody>
              {children}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default TableComponent