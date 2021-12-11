import { useEffect } from "react";
import { useState } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import dayjs from "dayjs";
import { Button } from "@mui/material";

export default function Trainings() {


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

    const deleteTraining = (link) => {

        if(window.confirm("Are you sure?")){
            fetch(link, {method: "DELETE"})
            .then(res => fetchData())
            .catch(err => console.error(err))
  
    }
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
        {
            sortable: false,
            filterable: false,
            width: 120,
            accessor: 'links[1].href',
            Cell: row => <Button style={{color: '#795ce0'}} onClick={() => deleteTraining(row.value)}>Delete</Button>
        },
     
    ]

    return (  
        <div className="column">
        <h2 className="header">Trainings</h2>
           <ReactTable  filterable={true} data={trainings} columns={columns}/>
        </div>
    );

    }
