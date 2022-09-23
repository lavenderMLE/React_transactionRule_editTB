import { Autocomplete , TextField } from "@mui/material";
import styled from "styled-components";





export const AutocompleteSelect = (props) => {
    const { menuItems , placeholder , width , size , handleChange , freeSolo=true } = props ;
    
    return (
        <RootSel
            freeSolo={freeSolo}
            id="combo-box-autocomplete"
            options={menuItems}
            size={size}
            width={width}            
            onInputChange={handleChange}
            renderInput={(params) =>    <TextField {...params} label={placeholder} />} 
        /> 
    ) 
} ;


const RootSel = styled(Autocomplete)`
    width : ${props => props.width };
    background-color : #2a2d35;
    border-radius : 5px;
    & svg {
        color : white;
    }
    & .MuiInputLabel-root {
        color : #889d9f;
    }
    .MuiInputBase-input {
        color : white;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border : 1px solid #f0aa15;        
    },    
    &:hover .MuiOutlinedInput-notchedOutline {
        border : 1px solid #f0aa15;        
    },    
    .MuiOutlinedInput-notchedOutline {
        border : unset;
    },
`;
