import { Autocomplete , TextField , Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";



const useStyles = makeStyles((theme) => ({
    textFieldRoot: {
        "& > div.MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root']": {            
            paddingRight: "9px",             

            // Search icon
            "& button": {
              order: 3, 
            },
      
            // Clear icon
            "& > div.MuiAutocomplete-endAdornment": {
              position: "relative", 
              order: 2,
            },
        },
    },
    inlineBtn : {
        color : 'white',
        backgroundColor : '#f0aa15 !important',
    }
}))

export const AutocompleteSelWithBtn = (props) => {
    const { menuItems , placeholder , width , size , btnLabel , handleBtnClick , handleChange } = props ;
    const classes = useStyles() ;
    return (
        <RootSel
            freeSolo
            id="combo-box-autocomplete"
            options={menuItems}
            size={size}
            width={width}            
            onInputChange={handleChange}
            renderInput={(params) =>    <TextField 
                                            {...params} 
                                            classes={{
                                                root : classes.textFieldRoot,
                                            }}
                                            label={placeholder}                                             
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <>
                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            onClick={handleBtnClick}
                                                            classes={{
                                                                root : classes.inlineBtn,
                                                            }}                                                            
                                                        >
                                                            {btnLabel}
                                                        </Button>
                                                        {params.InputProps.endAdornment}
                                                    </>
                                                )
                                            }}
                                        />
                                        
                                        
                        }            
        />
    ) ;
}

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
const Box = styled.div`
    display : flex;
    
`;