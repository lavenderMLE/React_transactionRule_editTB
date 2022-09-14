import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    root : {
        display : 'flex',
        alignItems : 'center'
    },
    title :  {
        fontSize : '14px',
        fontWeight : '600',        
        transform : 'translate(4px, 2px)'
    },    
    translateIcon : {
        fontSize : '16px !important',
    },
}))