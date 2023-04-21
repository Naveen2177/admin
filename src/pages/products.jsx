import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductsData from '../components/products.json';


const Products = () => {

  const rows = ProductsData.products

  console.log('ProductsData', ProductsData)

  return (
    <TableContainer component={Paper}>

      <h2>Products Table</h2>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">title</TableCell>
            <TableCell align="left">brand</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="left">discountPercentage</TableCell>
            <TableCell align="left">rating</TableCell>
            <TableCell align="left">category</TableCell>
            <TableCell align="left">stock</TableCell>
            <TableCell align="left">description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.map((row) => (

            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              {
                row.id &&
                <TableCell align="left">{row.id}</TableCell>
              }

              {
                row.title &&
                <TableCell align="left">{row.title}</TableCell>
              }

              {
                row.brand &&
                <TableCell align="left">{row.brand}</TableCell>
              }

              {
                row.price &&
                <TableCell align="left">{row.price}</TableCell>
              }

              {
                row.discountPercentage &&
                <TableCell align="left">{row.discountPercentage}</TableCell>
              }

              {
                row.rating &&
                <TableCell align="left">{row.rating}</TableCell>
              }

              {
                row.category &&
                <TableCell align="left">{row.category}</TableCell>
              }

              {
                row.stock &&
                <TableCell align="left">{row.stock}</TableCell>
              }

              {
                row.description &&
                <TableCell align="left">{row.description}</TableCell>
              }


            </TableRow>
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Products;

