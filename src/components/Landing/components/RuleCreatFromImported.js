import * as React from 'react';

import { InputField } from '../../../shared/ui/Selects/InputField';
import { AutocompleteSelect } from '../../../shared/ui/Selects/AutocompleteSelect';
import { NonEditTB } from '../../../shared/ui/Table/NonEditTB';
import { CustomDialog } from '../../../shared/ui/CustomDialog';
import { NormalDialog } from '../../../shared/ui/NormalDialog'; 
import BlueBtn from '../../../shared/ui/Buttons/BlueBtn' ;

import { Grid } from '@mui/material';
import styled from "styled-components";

const title = "Import Old Transactions"

const exported_header = [
    'NAME', 'TRNTYPE', 'DTPOSTED', 'TRNAMT','ACCOUNT', 'MEMO' , 'badgeID','badgeC','rule_ID','rule_Applied', 'STATUS',
] ;

let exported_content = [] ;

let exported_eachline = {
    NAME : '',
    TRNTYPE : '',  
    DTPOSTED : ''  ,
    TRNAMT : '',
    ACCOUNT : '',
    MEMO : '',
    badgeID : '',
    badgeC : '',
    rule_ID : '',
    rule_Applied : '',
    STATUS : '',
} ;
let exportedTB = [] ;


export const RuleCreatFromImported = (props) => {
    
    const { imported_tb , setImportedTb } = props ;
    const { accntsName , accntsType } = props ;

    const [ selectedTBHeader , setTbHeader ] = React.useState([]) ;
    const [ selectedTBContent , setTbContent ] = React.useState([]) ;
    const [ accnt , setAccnt ] = React.useState('') ;
    const [ accntType, setAccntType ] = React.useState('') ;
    
    const [ openDialog , setOpenDialog ] = React.useState(false) ;    
    const [ askWhichAccnt , setAskWhichAccnt ] = React.useState(false) ;
    const [ isNewAccntImport , setNewAccntImport ] = React.useState(false) ;

    
    // Reading csv and set values
    React.useEffect(() => {
        let header = imported_tb.slice( 0, 1 ) ;
        let content = imported_tb.slice( 1, imported_tb.length ) ;        
        
        setTbHeader( header[0] );
        setTbContent( content ) ;

        let temp = {} ;

        //  filter the content table 
        content.map((content_ele, content_idx) => {
            header[0].map((header_ele, header_idx) => {                   
                temp = {
                    ...temp,
                    [header_ele.toLowerCase()] : content_ele[header_idx],
                }                
            })
            exportedTB.push(temp) ;
        }) ;

    }, [ imported_tb ]) ;


    // handle autocomplete values for importing to account
    const handleAccntChange = (e, value) => {
        setAccnt( value ) ;
    }
    // handle autocomplete values for importing to account types
    const handleAccntTypeChange = (e, value) => {
        setAccntType( value ) ;
    }


    // handle Export Button click
    const handleExportBtnClick = () => {
        if(accnt) {                              
            if ( !accntType ) {
                setOpenDialog(true) ;

            } else {                  
                exported_content = [] ;                           
                exportedTB.map((ele, idx) => {               
                    exported_eachline = {                        
                        NAME : accnt ,                         
                        TRNTYPE  :  isNewAccntImport ? accntType : (ele.type),
                        DTPOSTED  :  ele.date ,
                        TRNAMT  :  ele.amount ,                        
                        ACCOUNT : '',
                        MEMO  :  ele.memo ? ele.memo : ele.description ,
                        badgeID : '',
                        badgeC : '',
                        rule_ID : '',
                        rule_Applied : '',
                        STATUS  :  1 ,
                    }
                    exported_content.push( exported_eachline ) ;
                }) ;                

                
                setTbHeader( exported_header ) ;
                setTbContent( exported_content ) ;                                                
            }
        } else {
            setAskWhichAccnt(true) ;
        }

        // if(accntType) {
        //     let accntTypeExist = accntsType.includes(accntType) ;            
        // } 
    }

    // Dialog handling...
    const handleCancelClick = () => {
        setOpenDialog(false);
        setNewAccntImport(false) ;
    } ;
    const handleOkClick = () => {
        setOpenDialog(false) ;
        setNewAccntImport(true) ;        
    }

    return (
        <RootDiv>
            <TitleDiv>
                {title}
            </TitleDiv>            
                   <Box>
                        <BrowseDiv>
                            <FirstGrid container>
                                <Grid item xs={3}>
                                    <Box>Account :</Box>
                                    <AutocompleteSelect 
                                        freeSolo={false}
                                        menuItems={accntsName}                                                                  
                                        size="small"
                                        width="300px"
                                        btnLabel="Export"                                                                
                                        handleChange={handleAccntChange}
                                    />                                                                            
                                </Grid>
                                <Grid item xs={3}>
                                    <Box>Matched_Text :</Box>
                                    <InputField fullWidth={false} width="300px" />
                                </Grid>
                            </FirstGrid>

                            <Grid container>                                
                                <Grid item xs={3}>                                                                            
                                    <Box>Badge :</Box>
                                    <InputField fullWidth={false} width="300px" />
                                </Grid>
                                <Grid item xs={3}>                                                                            
                                    <Box>Badge_Color :</Box>
                                    <AutocompleteSelect 
                                        freeSolo={false}
                                        menuItems={accntsType}  
                                        size="small"
                                        width="300px"
                                        btnLabel="Export"
                                        handleChange={handleAccntTypeChange}
                                    />                                                                                                    
                                </Grid> 
                                <Grid item xs={3}>                                                                            
                                    <Box>Amount :</Box>
                                    <InputField fullWidth={false} width="300px" />                                    
                                </Grid> 
                                <ExportGrid item xs={3} >                                    
                                    <BlueBtn 
                                        size="medium" label="ADD_RULE" width="100px"
                                    />
                                </ExportGrid>                                                                    
                            </Grid>
                        </BrowseDiv>
                        
                        <TableDiv>
                            <NameDiv>                                                                                                
                                IMPORTED & EXPORTED TABLE                                                
                            </NameDiv>
                            <NonEditTB tbHeader={selectedTBHeader} tbContent={selectedTBContent} />
                        </TableDiv>
                        
                        <CustomDialog 
                            open={openDialog} cancelClick={handleCancelClick} okClick={handleOkClick} 
                            title={'Alert!'}
                            content={'Which account type are you importing?'} 
                        />
                        
                        <NormalDialog
                            open={askWhichAccnt} setOpen={setAskWhichAccnt}
                            title={'Alert!'}
                            content={'Which account are you importing?'} 
                        />
                    </Box> 
        </RootDiv>
    )
}

const Box = styled.div``;

const RootDiv = styled.div`
    color : lightgray;
    height : calc(100vh - 60px);
    overflow : auto;
`;

const TitleDiv = styled.div`
    font-size : 25px;
    color : #f0aa15;
    font-weight : bold;
    text-align : center;
    margin-top : 20px;
    border-bottom : 1px solid lightgray;
`;
const BrowseDiv = styled.div`    
    // display : flex;
    // align-items : center;
    margin : 10px;            
    border-radius : 10px;
    padding : 20px;
    padding-bottom : 20px;    
`;

const TableDiv = styled.div`
    border : 1px solid gray;
    margin : 10px;
    border-radius : 10px;
`;
const NameDiv = styled.div`    
    text-align : center;
    padding : 5px;    
    border-bottom : 1px solid red;
    font-size : 20px;
    margin-top : 10px;    
`;

const ExportGrid = styled(Grid)`
    display : flex;
    align-items : end;
    justify-content : center;
`;

const FirstGrid = styled(Grid)`
    margin-bottom :10px;
`;