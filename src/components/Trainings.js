import { useEffect } from "react";
import { useState } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import dayjs from "dayjs";

const Trainings = () => {


    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const formatDate = (date) =>{
        return dayjs(date).format('DD/MM/YYYY HH:mm')
    }

    const columns = [
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Date',
            id: 'dateId',
            accessor: row => formatDate(row.date)
        },
        {
            Header: 'Duration (min)',
            accessor: 'duration'
        },
     
    ]

    return (  
        <div className="column">
        <h2>Trainings</h2>
           <ReactTable  filterable={true} data={trainings} columns={columns}/>
        </div>
    );
}
 
export default Trainings;