import * as React from 'react';

import { List , ListItemButton , ListItemText , Collapse } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styled from "styled-components";

export const ImportTypeList = (props) => {

    const { setSelectedParItem } = props ;
    const { 
        selectedIndex , setSelectedIndex , mainList ,
    } = props ;

    const {
        importType , selectedImportItem , setImportItem ,
    } = props ;

    const {
        ruleType , selectedRuleItem , setRuleItem ,
    } = props ;



    
    const [ openImport , setCollapseOpenImport ] = React.useState(false) ;
    const [ openRule , setCollapseOpenRule ] = React.useState(false) ;
    

    // non Collapse item clicked
    const handleListItemClick = ( e, idx ) => {
        setSelectedIndex(idx) ;
        setImportItem('') ;
        setRuleItem('') ;
    } ;


    // Collapse items clicked
    const handleCollapseOpenImport = () => {
        setCollapseOpenImport( !openImport ) ;
    } ;
    const handleCollapseOpenRule = () => {
        setCollapseOpenRule( !openRule ) ;
    } ;

    const handleCollapseItemClickImport = ( idx, parEle ) => {
        setImportItem(idx) ;
        setSelectedIndex('') ;
        setRuleItem('') ;
        setSelectedParItem( parEle ) ;
    } ;
    const handleCollapseItemClickRule = ( idx, parEle ) => {
        setRuleItem(idx) ;
        setSelectedIndex('') ;
        setImportItem('') ;
        setSelectedParItem( parEle ) ;
    }

    

    return (
        <RootDiv>
            <ListContainer >
            {
                mainList.map((ele , idx) => {
                    if ( idx === 1 ) {
                        return (
                            <>
                                <ListItemButton onClick={handleCollapseOpenImport} >
                                    <ListItemText primary={ele} />
                                    { openImport ? <ExpandLessIcon /> : <ExpandMoreIcon /> }  
                                </ListItemButton>
                                <Collapse in={openImport} timeout="auto" unmountOnExit >
                                    {
                                        importType.map((element , idx) => (
                                            <ListItemButton
                                                key={element}
                                                selected={ selectedImportItem === idx }
                                                onClick={ () => handleCollapseItemClickImport( idx, ele) }
                                                sx={{color: 'white' , paddingLeft: '30px'}}
                                            >
                                                <ListItemText primary={element} />
                                            </ListItemButton>
                                        ))

                                    }
                                </Collapse>
                            </>
                        )
                    } 
                    if ( idx === 3 ) {
                        return (
                            <>
                                <ListItemButton onClick={handleCollapseOpenRule} >
                                    <ListItemText primary={ele} />
                                    { openRule ? <ExpandLessIcon /> : <ExpandMoreIcon /> }  
                                </ListItemButton>
                                <Collapse in={openRule} timeout="auto" unmountOnExit >
                                    {
                                        ruleType.map((element , idx) => (
                                            <ListItemButton
                                                key={element}
                                                selected={ selectedRuleItem === idx }
                                                onClick={ () => handleCollapseItemClickRule( idx, ele) }
                                                sx={{color: 'white' , paddingLeft: '30px'}}
                                            >
                                                <ListItemText primary={element} />
                                            </ListItemButton>
                                        ))

                                    }
                                </Collapse>
                            </>                            
                        )
                    } else {
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
                    }
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
