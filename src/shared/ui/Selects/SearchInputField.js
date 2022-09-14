// import * as React from 'react';
// import { FormControl, Input } from "@mui/material";
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';
// import styled from 'styled-components';

// export const SearchInputField = () => {
//     const [ value , setValue ] = React.useState('') ;
//     const handleChange = () => (e) => {
//         setValue(e.target.value);
//     }
//     return (
//         <FormControlDiv variant="standard">
//             <Input
//                 id="standard-adornment-amount"
//                 value={value}
//                 onChange={handleChange('amount')}
//                 endAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
//             />
//         </FormControlDiv>
//     )
// }

// const FormControlDiv = styled(FormControl)`
//     color : white;
//     background-color : #2a2d35;
//     border-radius : 5px;    
//     & svg {
//         color : white ;
//     } ,      
//     &.Mui-focused .MuiOutlinedInput-notchedOutline {
//         border : 1px solid #f0aa15;        
//     },    
//     &:hover .MuiOutlinedInput-notchedOutline {
//         border : 1px solid #f0aa15;        
//     },    
//     .MuiOutlinedInput-notchedOutline {
//         border : unset;
//     },
// `


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
