
import { TextField } from "@mui/material"
import styled from "styled-components";

export const InputField = ({ fullWidth=true , width }) => {
    return (
        <AmountTextField            
            id="outlined-disabled"
            size="small"   
            fullWidth={fullWidth}         
            width={width}
        />              
    )
}

const AmountTextField = styled(TextField)`
    width : ${props => props.width };
    background-color : #2a2d35;
    border-radius : 5px;
    
    & svg {
        color : white;
    }
    & label  {
        color :  #b7bdc6 !important;
    }
    & input {
        -webkit-text-fill-color :  unset !important;        
        color : white !important;
    }
    & .MuiOutlinedInput-root {
        &:hover fieldset {
            border-color : #f0aa15;
        },
    }
    & .MuiInputAdornment-root p {
        color : #b7bdc6 !important;
    }
`
