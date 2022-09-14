import { Link } from 'react-router-dom';
import { Box } from "@mui/material";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        textAlign : 'center',
    },
    title : {
        color : '#f0aa15',
        fontSize : '19px',
        textAlign : 'center',
        fontWeight : 500,
        marginBottom : '20px',
    },
    item : {
        color : '#b7bdc6',
        fontSize : '0.875rem',
        textDecoration  : 'unset',
        display : 'block',
        marginBottom : '10px',
    }
}))
const FooterGridEachItem  = (props) => {
    const { title , items } = props ;
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                {title}
            </Box>
            <Box className={classes.items}>
                {
                    items.map((ele, idx) => (
                        <Link key={idx} to={ele.path} className={classes.item} >
                            {ele.label}
                        </Link>                    
                    ))
                }
            </Box>
        </Box>
    )
}

export default FooterGridEachItem ;