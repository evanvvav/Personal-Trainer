import { useEffect } from "react";
import { useState } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const Customers = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
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
    

    ]
    

    return (  
        <div className="column">
        <h2>Customers</h2>
           <ReactTable  filterable={true} data={customers} columns={columns}/>
        </div>
    );
}
 
export default Customers;