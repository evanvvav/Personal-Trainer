import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Addtraining({saveTraining, customer}) {

    const [open, setOpen] = React.useState(false);
    
    const [training, setTraining] = React.useState({
        date:'', duration: "", activity:'', customer: [customer.links[1].href]
    });


    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {   
    setOpen(false);
    };

    const handleInputChange = (event) => {
		setTraining({...training, [event.target.name]: event.target.value})
	}

    const addTraining = () => {
		saveTraining(training);
		handleClose();
	}

    return (
        <div>
            <Button style={{color: '#795ce0'}} variant="text" onClick={handleClickOpen}>
                Add Training
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Training</DialogTitle>
                    <DialogContent>
                
                    <TextField
                    autoFocus
                    margin="dense"
                    name="date"
                                value={training.date}
                    label="Date"
                    type="datetime-local"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                    />

					<TextField
                    margin="dense"
                    name="duration"
                                value={training.duration}
                    label="duration"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                     />

					<TextField
                    margin="dense"
                    name="activity"
                                value={training.activity}
                    label="activity"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                     />



                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addTraining}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}