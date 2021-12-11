import { useEffect } from "react";
import { useState } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css'

const Trainings = () => {

    function isEmpty(obj) {
        for(var prop in obj) {
          if(Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
          }
        }
      
        return JSON.stringify(obj) === JSON.stringify({});
      }

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
     
    ]

    let len = trainings.length;
    for (let i = 0; i < len - 1; i++)
    {
        let date = new Date(trainings[i].date);
        trainings[i].date = date.toLocaleString("en-US");
    }

    return (  
        <div className="column">
        <h2>Trainings</h2>
           <ReactTable  filterable={true} data={trainings} columns={columns}/>
        </div>
    );
}
 
export default Trainings;