import { Box, Button, Link  } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        justifyContent : 'center',
    },
    button : {
        backgroundColor : "#0288d1 !important",
        borderRadius : props => props.radius,
        width : props => props.width,
        color : "white !important",
        "& a" : {
            textDecoration : 'unset',
            textTransform : 'capitalize',
            letterSpacing : '0.7px',
            color : 'white'
        },
        "&:hover" : {
            backgroundColor : '#01579b !important'
        }
    },
    icon : {
        color : 'black',
    }
}))
const BlueBtn = ({ 
                    size="medium", 
                    width, 
                    radius, 
                    variant="contained", 
                    path, 
                    label, 
                    icon,
                }) => 
{
    const classes = useStyles( {width: width, radius: radius, } ) ;
    const BtnIcon = icon ;

    return (
        <Box className={classes.root}>
            <Button 
                size={size}                 
                variant={variant} 
                className={classes.button} 
                startIcon={ icon ? <BtnIcon className={classes.icon} /> : <></>} 
            >
                <Link to={path} >
                    <Box className={classes.label}>
                        {label}
                    </Box>
                </Link>
            </Button>
        </Box>
    )
}

export default BlueBtn ;