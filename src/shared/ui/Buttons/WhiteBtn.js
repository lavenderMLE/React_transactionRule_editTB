import { Box, Button, Link  } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        justifyContent : 'center',
        margin : props => {
            if (props.margin) {
                return props.margin;
            }
        },
    },
    button : {
        backgroundColor : "#e0e0e0 !important",
        borderRadius : props => props.radius,
        width : props => props.width,
        color : "unset !important",        
        "& a" : {
            textDecoration : 'unset',
            textTransform : 'capitalize',
            letterSpacing : '0.7px',
        },
        "&:hover" : {
            backgroundColor : '#f5f5f5 !important'
        }
    },
    icon : {
        color : 'black',
    },
    label : {
        color : props => {
            if (props.labelColor) {
                return props.labelColor;
            }
        },
    }
}))
const WhiteBtn = ({ 
                        size="medium", 
                        width, 
                        radius, 
                        variant="contained", 
                        path, 
                        label, 
                        icon,
                        margin,
                        labelColor,
                        handleclick,
                    }) => 
{
    
    const classes = useStyles( {width: width, radius: radius, margin: margin, labelColor: labelColor } ) ;
    const BtnIcon = icon ;

    return (
        <Box className={classes.root}>
            <Button 
                size={size}                 
                variant={variant} 
                className={classes.button} 
                startIcon={ icon ? <BtnIcon className={classes.icon} /> : <></>} 
                onClick = {handleclick}
            >
                <Link href={path} >
                    <Box className={classes.label}>
                        {label}
                    </Box>
                </Link>
            </Button>
        </Box>
    )
}

export default WhiteBtn ;