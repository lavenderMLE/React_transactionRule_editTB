import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles( (theme) => ({
    root : {
        borderRadius : '10px',
        border : '1px solid #f0aa15',
        padding : '15px',
    },
    title : {
        color : '#f0aa15',        
        fontSize : '14px',
        fontWeight : '700',
    }
}))

export const NotificationCard = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Hi, there
            </Box>
            <Box>
                <Box component="p" >
                    Recently, price of coin is lower more and more.
                </Box>
                <Box component="p" >
                    I am worry about this.
                </Box>
            </Box>
        </Box>
    )
}