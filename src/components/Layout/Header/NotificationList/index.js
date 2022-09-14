import { NotificationCard } from "./NotificationCard";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root : {
        border : '1px solid gray',
        width : '350px',
        color : 'white',
        position : 'fixed',
        right : '0%',
        height : 'calc(100vh - 60px)',        
        zIndex : '100',
        backgroundColor : '#2a2d35',
        padding : '15px',
        boxShadow : '-3px 0px 7px -2px grey',
    },
}))
export const NotificationList = ( props ) => {
    const { isAlertClicked } = props ;
    const classes = useStyles();

    return (
        <Box>
            {
                isAlertClicked &&   <Box className={classes.root}>
                                        <NotificationCard />
                                    </Box>
            }
        </Box>
    )
}