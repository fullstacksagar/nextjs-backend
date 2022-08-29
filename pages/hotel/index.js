import { React, useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
const columns = [
  { field: "_id", headerName: "ID", width: 170 },
  { field: "name", headerName: "name", width: 230 },
  { field: "type", headerName: "type", width: 230 },
];

export default function DataTable() {
  const [hotels, setHotels] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const getHotels = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/Hotel/hotel?min=1&max=2000"
      );
      setHotels(response.data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <>
      <div className="container" style={{ height: 420 }}>
        <h4 className="mb-3">Default Toolbar DataTable</h4>

        <DataGrid
          title={"MD DataTable"}
          rows={hotels}
          id={Math.random()}
          columns={columns}
          getRowId={(row) => row.no}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 20, 100]}
          pagination={true}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </>
  );
}
