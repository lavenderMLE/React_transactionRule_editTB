import { MenuItem, Box, Select, InputLabel, FormControl } from "@mui/material";

import styled from "styled-components";
import * as React from "react";

const SelectComponent = ({ 
    label, size, labelID, menuItems, labelAlign, fullWidth=true ,
    setItem, width,
}) => {

    const [ selectedMenuItem, setMenuItem ] = React.useState( 0 );

    React.useEffect(() => {        
        setItem( selectedMenuItem ) ;
    }, [selectedMenuItem]) ;

    const handleChange = (e) => setMenuItem( e.target.value ) ;


    return (
        <Box>
            <FormControl fullWidth={fullWidth} size={size} >
                <Label id={labelID} >
                    { label }
                </Label>
                <OrderSel 
                    labelId ={ labelID }
                    id="order-type"
                    value={ selectedMenuItem }
                    label={ label }
                    onChange={handleChange}
                    sx={{ color : 'white'}}
                    align={ labelAlign }
                    width={width}
                >
                {
                    menuItems.map((ele, idx) => (
                        <MenuItem value={idx} key={idx} >{ele}</MenuItem>
                    ))
                }                    
                </OrderSel>
            </FormControl>
        </Box>
    )
}



const Label = styled(InputLabel)`
    color : #b7bdc6 !important;
`
const OrderSel = styled(Select)`
    color : white;
    background-color : #2a2d35;
    border-radius : 5px;

    width : ${props => props.width};

    & #order-type {
        text-align : ${props => props.align};
    }
    & svg {
        color : white ;
    } ,      
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border : 1px solid #f0aa15;        
    },    
    &:hover .MuiOutlinedInput-notchedOutline {
        border : 1px solid #f0aa15;        
    },    
    .MuiOutlinedInput-notchedOutline {
        border : unset;
    },
`

export default SelectComponent ;