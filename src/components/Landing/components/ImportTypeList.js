import * as React from 'react';

import { List , ListItemButton , ListItemText } from "@mui/material";

import styled from "styled-components";

export const ImportTypeList = (props) => {
    const { 
        selectedIndex , setSelectedIndex        
    } = props ;
    
    const handleListItemClick = (e, idx) => {
        setSelectedIndex(idx) ;
    }    

    const { importType } = props ;

    return (
        <RootDiv>
            <ListContainer >
            {
                importType.map((ele , idx) => {
                    return (
                        <ListItemButton 
                            key={ele}
                            selected={ selectedIndex === idx }    
                            onClick={ (e) => handleListItemClick(e, idx ) }
                            sx={{color: 'white'}}
                        >
                            <ListItemText primary={ele} />                        
                        </ListItemButton>
                    )
                    })
            }
            </ListContainer>                    
        </RootDiv>
    )
}

const RootDiv = styled.div`    
    padding-left : 10px;
    padding-right : 10px;
    & .Mui-selected {
        background-color : #f0aa15 !important;
        border-radius : 10px;
        & .MuiListItemText-primary {
            color : white !important;
        }
    }    
    & .MuiListItemText-primary {
        font-size : 14px;
        font-weight : bold;
        color : #b7bdc6;
    }
    & .MuiListItemText-root {
        margin : 0px ;
    }
    height : calc(100vh - 60px);
    overflow-y : scroll;
    
`;

const ListContainer = styled(List)`
    & svg {
        color : #b7bdc6 ;
    }
    
`
