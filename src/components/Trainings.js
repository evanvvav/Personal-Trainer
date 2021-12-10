import { useEffect } from "react";
import { useState } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const Trainings = () => {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const columns = [
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Duration (min)',
            accessor: 'duration'
        },
        {
            Header: 'Customer',
            accessor: 'links[2].href'
        }
     
    ]

    return (  
        <div className="column">
        <h2>Trainings</h2>
           <ReactTable  filterable={true} data={trainings} columns={columns}/>
        </div>
    );
}
 
export default Trainings;