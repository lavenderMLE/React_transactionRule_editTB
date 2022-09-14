import { TextField, InputAdornment } from "@mui/material"
import styled from "styled-components";

const SelectInputComponent = ({ label="Amount", currency="ETH", fullWidth=true }) => {
    return (
        <AmountTextField            
            id="outlined-disabled"
            label={label}
            type="number"
            InputLabelProps={{
                shrink: true,
              }}
            defaultValue="0"
            size="small"
            fullWidth={fullWidth}
            InputProps={{
                endAdornment: <InputAdornment position="end">{currency}</InputAdornment>,
            }}
        />              
    )
}

const AmountTextField = styled(TextField)`
    background-color : #2a2d35;
    border-radius : 5px;
    & label  {
        color :  #b7bdc6 !important;
    },
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

export default SelectInputComponent ;