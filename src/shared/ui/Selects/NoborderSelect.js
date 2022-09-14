import * as React from 'react';
import { Select , FormControl , MenuItem } from "@mui/material";
import styled from 'styled-components';


export const NoborderSelect = (props) => {
    const { menuItems } = props;
    
    const [ menuItem , setMenuItem ] = React.useState(0);

    const handleChange = (e) => {
        setMenuItem(e.target.value) ;
    }
    return (
        <FormContainer variant='standard' >
            <Select
                value={menuItem}
                onChange={handleChange}                
                disableUnderline
            >
                {
                    menuItems.map((ele , idx) => (
                        <MenuItem value={idx} key={ele}>{ele}</MenuItem>
                    ))
                }
            </Select>            
      </FormContainer>
    )
}

const FormContainer = styled(FormControl)`
    background : #2a2d35;
    border-radius : 5px;
    margin-left : 5px;

    & .MuiSelect-select {
        color : white;
    }    
    & svg {
        color : white;
        // margin-right : 5px;
    }
`