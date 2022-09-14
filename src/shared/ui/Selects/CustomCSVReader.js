import * as React from 'react';

import Papa from "papaparse";

import { TextField , InputAdornment } from "@mui/material";

import styled from "styled-components";

import { ChooseFileBtn } from '../Buttons/ChooseFileBtn';



export const CustomCSVReader = ({ 
    endAdornmentText="Btn" , width="" , setData
}) => {

    const [ file, setFile ] = React.useState('') ;
    const [ fileName , setFileName ] = React.useState('') ;

    React.useEffect( () => {
        if( file ) {
            const reader = new FileReader();

            reader.onload = async ({ target }) => {                
                const csv = Papa.parse(target.result) ;
                const parseData = csv?.data ;                
                setData( parseData ) ;
            } ;
            reader.readAsText(file) ;
            
            setFileName( file.name );
        }
    } , [file] ) ;

    
    return (
        <BrowseTextField 
            id="outlined-read-only-input"
            size="small"                                                        
            value={fileName}
            width={width}
            InputProps={{
                readOnly : true,
                endAdornment:   <InputAdornment position="end">
                                    <ChooseFileBtn 
                                        size="small"
                                        labelColor="black"
                                        label={endAdornmentText}
                                        allowedExtenstions={['csv', 'IIF']}
                                        setFile={setFile}
                                    />
                                </InputAdornment>,
            }}
        />
    )
}

const BrowseTextField = styled(TextField)`
    background-color : #2a2d35;
    width : ${props => props.width };
    border-radius : 5px;
    & .MuiInputBase-input {
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
