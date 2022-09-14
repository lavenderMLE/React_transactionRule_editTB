import * as React from 'react';

import { Box, Button, InputBase  } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {        
        textAlign : 'center',
        margin : props => {
            if ( props.margin ) {
                return props.margin ;
            }
        },
    },
    button : {
        backgroundColor : "#f0aa15 !important",
        borderRadius : props => props.radius,
        width : props => props.width,
        color : "unset !important",        
        
        "& a" : {
            textDecoration : 'unset',
            textTransform : 'capitalize',
            letterSpacing : '0.7px',
        },
        "&:hover" : {
            backgroundColor : 'rgb(168, 118, 14) !important'
        }
    },
    icon : {
        color : 'black',
    },
    label : {
        color : props => {
            if ( props.labelColor ) {
                return props.labelColor;
            }
        },
    },
    inputFile : {
        display : 'none !important',        
    },
}))
export const ChooseFileBtn = ({ 
                        size="medium", 
                        width, 
                        radius, 
                        variant="contained",                         
                        label, 
                        icon,
                        margin,
                        labelColor,
                        allowedExtenstions= ['csv'],
                        setFile,   
                    }) => 
{
    
    const classes = useStyles( {width: width, radius: radius, margin: margin, labelColor: labelColor} ) ;
    const BtnIcon = icon ;

    const fileInputRef = React.useRef(null) ;

    const handleclick = (e) => {
        fileInputRef.current.click();
    };
    
    const handleChange = (e) => {
        if (e.target.files.length) {

            const fileUploaded = e.target.files[0];            

            const fileExtension = fileUploaded.name.split(".")[1];            
            if ( !allowedExtenstions.includes(fileExtension) ) {
                return ;
            }
            
            setFile(fileUploaded) ;
        }        
    }

    return (
        <Box className={classes.root}>
            <Button 
                size={size}                 
                variant={variant} 
                className={classes.button} 
                startIcon={ icon ? <BtnIcon className={classes.icon} /> : null } 
                onClick = {handleclick}
            >                
                <Box className={classes.label}>
                    {label}
                </Box>
                <InputBase 
                    type="file"                     
                    className={classes.inputFile}
                    inputRef={fileInputRef}
                    onChange={handleChange}
                />
                
            </Button>
        </Box>
    )
}

