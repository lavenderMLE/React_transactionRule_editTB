
import FooterBottom from './footerBottom';

import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
 
const useStyles = makeStyles(() => ({
    root : {
        backgroundColor : '#161a1e',                
    }
})) ;

const Footer = (props) => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            {/* <FooterGrid /> */}
            <FooterBottom />            
        </Box>
    
    )
}

export default Footer ;