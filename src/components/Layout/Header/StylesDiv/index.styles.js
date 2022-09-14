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
    },
    menuContainer : {
        display : 'flex',
        alignItems : 'center',
        width : '100%',
        justifyContent : 'space-between'
    },
    listItem : {
        // padding : '8px 16px'
    },
    mainMenu : {
        display : 'flex',
        "& .MuiListItem-root" : {
            width : 'unset'
        },
        "& a" : {
            color : 'white'
        }
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



}))