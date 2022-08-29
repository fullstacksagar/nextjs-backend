import { React, useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

import { CSVLink, CSVDownload } from "react-csv";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const Table = () => {


  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setfilteredCountries] = useState([]);
  const getCountries = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v2/all");
      setCountries(res.data);
      setfilteredCountries(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
      sortable: true,
      reorder: true,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
      sortable: true,
      reorder: true,
    },
    {
      name: "Country Flag",
      selector: (row) => <img width={50} height={50} src={row.flag} />,
    },
    //add actions
    {
      name: "Action",
      cell: (row) => (
        <div>
          {" "}
          <button type="button" className="btn btn-success  btn-sm mr-2">
            <AiOutlineEdit />
          </button>
          <button type="button" className="btn btn-danger  btn-sm ">
            <AiOutlineDelete />
          </button>{" "}
        </div>
      ),
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search);
    });
    setfilteredCountries(result);
  }, [search]);
  return (
    <>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="row mt-3 mr-3">
            <div className="col-md-12  d-flex justify-content-end"> <CSVLink data={filteredCountries}  className="btn btn-primary btn-sm"
              target="_blank" >Export CSV</CSVLink></div>
          </div>
          <DataTable
            title="Country List"
            columns={columns}
            data={filteredCountries}
            pagination
            highlightOnHover
            subHeader
            subHeaderComponent={
              <input
                type="text" width={30}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control"

                placeholder="Search"
              />
            }
          />

        </div>
      </div>
    </>
  );
};

export default Table;
