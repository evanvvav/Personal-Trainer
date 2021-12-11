import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Addcustomer from "./Addcustomer";
import Stack from '@mui/material/Stack';
import Editcustomer from "./Editcustomer";
import Addtraining from "./Addtraining";

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

    const saveTraining = (training) => {
        fetch('https://customerrest.herokuapp.com/api/training', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
          })
          .then(res=> fetchData())
          .catch(err=>console.error(err))
        
    }

    const updateCustomer = (customer, link) => {
        fetch(link, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
      })
      .then(res => fetchData())
      .catch(err => console.error(err))
        
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
            ortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[1].href',
            Cell: row => <Button style={{color: '#795ce0'}} onClick={() => deleteCustomer(row.value)}>Delete</Button>
        },
        {
            sortable: false,
            filterable: false,
            width: 140,
            accessor: 'links[2].href',
            Cell: row => <Addtraining saveTraining={saveTraining} customer={row.original}/>
        }
    

    ]
    

    return (  
        <div className="column">
        <Stack direction="row" spacing={2} > 
        <h2 className="header">Customers</h2>
        <Addcustomer saveCustomer={saveCustomer}/>
        </Stack>
        <ReactTable filterable={true} data={customers} columns={columns}/>
        </div>
    );
}
 
