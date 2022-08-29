import { React, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material"
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
const columns = [
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'firstName', headerName: 'First name', width: 230 },
  { field: 'lastName', headerName: 'Last name', width: 230 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 260,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


export default function DataTable() {
  const [pageSize, setPageSize] = useState(5)

  return (
    <>
      <div className='container' style={{ height: 420 }}>
        <h4 className='mb-3'>Default Toolbar DataTable</h4>
       
            <DataGrid
              title={"MD DataTable"}
              rows={rows}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 20, 100]}
              pagination={true}
              checkboxSelection
              components={{ Toolbar: GridToolbar }}
            />
          

      </div>

      {/* // single export */}

      <div className='container my-5' style={{ height: 420 }}>
        <h4 className='mb-3'>Single Toolbar DataTable</h4>

        <DataGrid
          title={"MD DataTable"}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          pagination={true}
          checkboxSelection
          components={{
            Toolbar: () => {
              return <GridToolbarContainer style={{ justifyContent: "flex-end", display: "flex" }}>
                <GridToolbarExport />
              </GridToolbarContainer>
            }
          }}
        />
      </div>
    </>
  );
}
