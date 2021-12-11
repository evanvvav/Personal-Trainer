import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Addcustomer from "./Addcustomer";

export default function Customers() {

    const [customers, setCustomers] = useState([]);
    
    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }   

    const saveCustomer=(customer)=> {
        fetch('https://customerrest.herokuapp.com/api/customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(customer)
        })
        .then(res=> fetchData())
        .catch(err=>console.error(err))
      }

    const deleteCustomer = (link) => {

        if(window.confirm("Are you sure?")){
            fetch(link, {method: "DELETE"})
            .then(res => fetchData())
            .catch(err => console.error(err))
  
    }

   

    }

    const columns = [
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },

        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[1].href',
            Cell: row => <Button onClick={() => deleteCustomer(row.value)}>Delete</Button>
        }
    

    ]
    

    return (  
        <div className="column">
        <h2>Customers</h2>
        <Addcustomer saveCustomer={saveCustomer}/>
        <ReactTable filterable={true} data={customers} columns={columns}/>
        </div>
    );
}
 
