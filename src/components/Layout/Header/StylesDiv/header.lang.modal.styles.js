import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root : {
        display : 'flex',
        alignItems : 'center',
        cursor : 'pointer',                
    },
    title :  {
        fontSize : '14px',
        fontWeight : '600',        
        transform : 'translate(4px, 2px)'
    },    
    translateIcon : {
        fontSize : '16px !important',
    },
    popOverRoot : {
        display : 'flex',
        borderRadius : '10px',
        paddingTop : '16px',
        paddingBottom : '16px',
        width : '300px',
    },
    popOverTitle : {
        fontSize : '12px',
        color : 'gray',      
        paddingTop : '0px !important',
        paddingRight : '0px !important',
        paddingLeft : '10px !important',
        paddingBottom : '15px !important',
    },
    popOverItem : {
        fontSize : '16px',
        color : '#f0aa15 !important',
        height : '30px',
        padding : '0px !important',
        paddingLeft : '10px !important',
    },
    curSelGrid : {
        padding : '0px !important',
    },
    lanSelGrid : {
        padding : '0px !important',
        borderRight : '1px solid #f0aa15',
    }
    
}))