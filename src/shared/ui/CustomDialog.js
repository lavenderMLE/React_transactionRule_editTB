import { Box , Button , Dialog , DialogActions , DialogContent , DialogContentText , DialogTitle } from "@mui/material";
import  * as React from 'react';


export const CustomDialog = (props) => {
    const { open , cancelClick , okClick } = props ;
    const { title , content } = props ;
    
    const handleCancelClose = () => {
        cancelClick() ;
    };
    const handleOkClose = () => {
        okClick();
    };
    
    return (
        <Box>            
            <Dialog
                open={open}
                onClose={handleCancelClose}
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
                    <Button onClick={handleCancelClose}>Cancel</Button>
                    <Button onClick={handleOkClose} autoFocus>Ok</Button>                
                </DialogActions>

            </Dialog>
        </Box>
    )
}