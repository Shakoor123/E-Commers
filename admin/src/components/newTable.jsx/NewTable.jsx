import './newTable.scss'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const columns: GridColDef[] = [
  { headerName: '', width: 70 ,},

  { field: 'id', headerName: 'ID', width: 70 },

  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 130,
  },
  {
    field:"status",
    headerName:"status",
    sortable: false,
    width: 260,

  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,status:"active",profile:"ksjdvkk"},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },


];

export default function NewTable() {
  return (
    <div style={{ height: 600, width: '100%' }} className='NewTable'>
      <Link to={'/new'}>
      <button className='button'>Add New</button>
      </Link>
      <DataGrid
      className='colum'
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
  );
}
