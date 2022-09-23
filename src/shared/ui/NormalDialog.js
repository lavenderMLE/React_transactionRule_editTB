import { Box , Button , Dialog , DialogActions , DialogContent , DialogContentText , DialogTitle } from "@mui/material";
import  * as React from 'react';


export const NormalDialog = (props) => {
    const { open , setOpen } = props ;
    const { title , content } = props ;
    
    const handleClose = () => {
        setOpen(false) ;
    };
    
    return (
        <Box>            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>Ok</Button>                
                </DialogActions>

            </Dialog>
        </Box>
    )
}