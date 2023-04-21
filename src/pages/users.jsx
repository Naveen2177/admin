import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserData from '../components/users.json'


const Users = () => {

  const rows = UserData.users

  console.log('UserData', UserData)

  return (
    <TableContainer component={Paper}>

      <h2>Users</h2>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='text-uppercase'>
          <TableRow>
            <TableCell align="left">username</TableCell>
            <TableCell align="left">maidenName</TableCell>
            <TableCell align="left">lastName</TableCell>
            <TableCell align="left">age</TableCell>
            <TableCell align="left">birthDate</TableCell>
            <TableCell align="left">gender</TableCell>
            <TableCell align="left">university</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align="left">userAgent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (


            <TableRow key={rows.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

              {row.username &&
                <TableCell align="left">{row.username}</TableCell>
              }

              {row.maidenName &&
                <TableCell align="left">{row.maidenName}</TableCell>
              }

              {
                row.lastName &&
                <TableCell align="left">{row.lastName}</TableCell>
              }

              {
                row.age &&
                <TableCell align="left">{row.age}</TableCell>
              }

              {
                row.birthDate &&
                <TableCell align="left">{row.birthDate}</TableCell>
              }

              {
                row.gender &&
                <TableCell align="left">{row.gender}</TableCell>
              }

              {
                row.university &&
                <TableCell align="left">{row.university}</TableCell>
              }

              {
                row.email &&
                <TableCell align="left">{row.email}</TableCell>
              }

              {
                row.userAgent &&
                <TableCell align="left">{row.userAgent}</TableCell>
              }

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Users;

