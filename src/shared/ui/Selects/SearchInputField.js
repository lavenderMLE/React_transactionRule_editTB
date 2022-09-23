


import { TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";

export const SearchInputField = () => {
    return (
        <AmountTextField            
            id="outlined-disabled"
            size="small"
            InputProps={{
                endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
            }}
        />              
    )
}

const AmountTextField = styled(TextField)`
    background-color : #2a2d35;
    border-radius : 5px;
    width : 200px;
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
