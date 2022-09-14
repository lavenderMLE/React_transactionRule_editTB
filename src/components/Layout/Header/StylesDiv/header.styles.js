import { calc } from "@chakra-ui/react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(( theme ) => ({
    root : {
        height : '60px',
        backgroundColor : '#161a1e' ,
        color : 'white',
        fontSize : '15px',
        display : 'flex',
        alignItems : 'center',
        borderBottom : '2px #303030 solid',
        position : 'fixed',
        top : '0%',
        width : '100%',
        zIndex : '1000',
        
    },
    menuContainer : {
        display : 'flex',
        alignItems : 'center',
        width : '100%',
        justifyContent : 'flex-end',
        "& .MuiListItemButton-root" : {
            padding : "8px",
        },        
    },
    mainMenu : {
        display : 'flex',        
        alignItems : 'center',
        padding : '0px !important',
        "& a" : {
            textDecoration : 'unset',
            color : 'white'
        },           
        "& .MuiListItem-root" : {
            padding : '0px 16px 0px 16px',            
            cursor : 'pointer',
            width : 'unset',
            "&:hover" : {
                color : '#f0aa15'
            },
            ['@media (max-width : 450px)'] : {
                padding : '5px !important',
                minWidth : '0px !important',
            },
        },            
    },

    nabButton : {        
        "&:hover" : {
            color : 'unset !important'
        }
    },
    secondMenuGrid : {
        display : 'flex',
        justifyContent : 'flex-end',
    },   
    logo : {
        display : 'flex',
        height : '35px',
        paddingLeft : '20px',
        cursor : 'pointer'
    },
    notificationIcon : {
        cursor : 'pointer',        
    },
   
    translateTitle : {
        fontSize : '12px'
    },
    notification : {
        color : 'red',
        // width : '350px',
        // height : 'calc(100vh - 60px)',
        // border : '1px solid green',
    },
}))