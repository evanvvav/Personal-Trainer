import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Editcustomer(props) {

    const [open, setOpen] = React.useState(false);
    
    const [customer, setCustomer] = React.useState({
        firstname: '', lastname: '', streetaddress: '', postcode: '', city: '', email: '', phone: ''
    });


    const handleClickOpen = () => {
    setCustomer({firstname: props.customer.firstname, lastname: props.customer.lastname,
        streetaddress: props.customer.streetaddress, postcode: props.customer.postcode, 
        city: props.customer.city, email: props.customer.email, phone: props.customer.phone})
    setOpen(true);
    };

    const handleClose = () => {   
    setOpen(false);
    };

    const handleInputChange = (event) => {
		setCustomer({...customer, [event.target.name]: event.target.value})
	}

    const updateCustomer = () => {
		props.updateCustomer(customer, props.customer.links[1].href);
		handleClose();
	}

    return (
        <div>
            <Button style={{color: '#795ce0'}} variant="text" onClick={handleClickOpen}>
                Edit 
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Customer</DialogTitle>
                    <DialogContent>
                
                    <TextField
                    autoFocuss
                    margin="dense"
                    name="firstname"
                                value={customer.firstname}
                    label="firstname"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                    />

					<TextField
                    margin="dense"
                    name="lastname"
                                value={customer.lastname}
                    label="lastname"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                     />

					<TextField
                    margin="dense"
                    name="email"
                                value={customer.email}
                    label="email"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                     />
					<TextField
                    margin="dense"
                    name="phone"
                                value={customer.phone}
                    label="phone"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                     />

					<TextField
                    margin="dense"
                    name="streetaddress"
                                value={customer.streetaddress}
                    label="streetaddress"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                     />

					<TextField
                    margin="dense"
                    name="postcode"
                                value={customer.postcode}
                    label="postcode"
                    fullWidth
                    variant="standard"
                                onChange={e => handleInputChange(e)}
                    />

                    <TextField
                        margin="dense"
                        name="city"
                                    value={customer.city}
                        label="city"
                        fullWidth
                        variant="standard"
                                    onChange={e => handleInputChange(e)}
                    />

                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={updateCustomer}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}