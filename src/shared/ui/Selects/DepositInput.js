import { TextField, InputAdornment } from "@mui/material"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import styled from "styled-components";

export const DepositInput = ({ fullWidth=true }) => {
    return (
        <AmountTextField            
            id="outlined-disabled"
            size="large"
            fullWidth={fullWidth}
            variant="standard"
            InputProps={{
                endAdornment: <InputAdornment position="end"><MonetizationOnIcon/></InputAdornment>,
            }}
        />              
    )
}

const AmountTextField = styled(TextField)`
    background-color : #2a2d35;
    border-radius : 5px;
    padding : 5px;
    & .MuiInputBase-input {
        color : white !important;        
    }
    & .MuiInputBase-root {
        ::after {
            border-bottom : 2px solid #f0aa15 !important;
        }
    }
    & svg {
        color : white;
    }
            
`
