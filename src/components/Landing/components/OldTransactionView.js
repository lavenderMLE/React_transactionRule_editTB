import * as React from 'react';

import { CustomCSVReader } from '../../../shared/ui/Selects/CustomCSVReader';
import { AutocompleteSelect } from '../../../shared/ui/Selects/AutocompleteSelect';
import { NonEditTB } from '../../../shared/ui/Table/NonEditTB';
import { CustomDialog } from '../../../shared/ui/CustomDialog';
import { NormalDialog } from '../../../shared/ui/NormalDialog'; 
import YellowBtn from '../../../shared/ui/Buttons/YellowBtn' ;

import { Grid } from '@mui/material';
import styled from "styled-components";

const title = "Import Old Transactions"

const exported_header = [
    'NAME', 'TRNTYPE', 'DTPOSTED', 'TRNAMT', 'ACCOUNT' ,'CHECKNUM' ,'MEMO' ,'BALANCE' ,'DATE_TIME','STATUS', 'NAME_OG','MEMO_OG',
] ;
const exported_content = [] ;

let exported_eachline = {
    NAME : '',
    TRNTYPE : '',
    DTPOSTED : '',
    TRNAMT : '',
    ACCOUNT : '',
    CHECKNUM : '',
    MEMO : '',
    BALANCE : '',
    NAME_OG : '',
    MEMO_OG : '',
    DATE_TIME : '',
    STATUS : '',
} ;
const exportedTB = [] ;


export const OldTransactionView = (props) => {
    
    const { transactions_tb , setTransactionsTb } = props ;
    const { accntsName , setAccntsName , accntsType } = props ;

    const [ selectedTBHeader , setTbHeader ] = React.useState([]) ;
    const [ selectedTBContent , setTbContent ] = React.useState([]) ;
    const [ accnt , setAccnt ] = React.useState('') ;
    const [ accntType, setAccntType ] = React.useState('') ;

    const [ openDialog , setOpenDialog ] = React.useState(false) ;
    const [ isNewAccntImport , setNewAccntImport ] = React.useState(false) ;
    const [ askWhichAccnt , setAskWhichAccnt ] = React.useState(false) ;

    
    // Reading csv and set values
    React.useEffect(() => {
        let header = transactions_tb.slice( 0, 1 ) ;
        let content = transactions_tb.slice( 1, transactions_tb.length ) ;        
        
        setTbHeader( header[0] );
        setTbContent( content ) ;

        let temp = {} ;

        //  filter the content table 
        content.map((content_ele, content_idx) => {
            header[0].map((header_ele, header_idx) => {
                if( header_idx > 0 ) {                    
                    temp = {
                        ...temp,
                        [header_ele.toLowerCase()] : content_ele[header_idx],
                    }
                }
            })
            exportedTB.push(temp) ;
        }) ;

    }, [ transactions_tb ]) ;


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
            let accntExist = accntsName.includes(accnt) ;      
                  
            if ( !accntExist ) {
                setOpenDialog(true) ;

            } else {                                             
                exportedTB.map((ele, idx) => {
                    let today = new Date() ;
                    let date = ( today.getMonth()+1 ) + '/' + today.getDate() + '/' + today.getFullYear() ;
                    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ;
                    let dateTime = time + ' ' + date ;

                    exported_eachline = {                        
                        NAME : accnt , 
                        TRNTYPE  :  isNewAccntImport ? accntType : (ele.type),
                        DTPOSTED  :  ele.date ,
                        TRNAMT  :  ele.amount ,
                        ACCOUNT  :  ele.split ,
                        CHECKNUM  :  ele.num ,
                        MEMO  :  ele.memo ? ele.memo : ele.name ,
                        BALANCE  :  ele.balance ,
                        DATE_TIME  :  dateTime ,
                        STATUS  :  5 ,
                        NAME_OG  :  ele.name ,
                        MEMO_OG  :  ele.memo ,              
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
        setAccntsName([...accntsName ,accnt]) ;
    }

    return (
        <RootDiv>
            <TitleDiv>
                {title}
            </TitleDiv>            
                   <Box>
                        <BrowseDiv>
                            Import : &nbsp;
                            <CustomCSVReader endAdornmentText="Browse" setData={setTransactionsTb} />                                    
                        </BrowseDiv>
                        {
                            transactions_tb.length > 0 ?   <BrowseDiv>
                                                    <Grid container >
                                                        <Grid item xs={5}>
                                                            Export : &nbsp;
                                                            <AutocompleteSelect 
                                                                menuItems={accntsName}  
                                                                placeholder={'accounts'}
                                                                size="small"
                                                                width="300px"
                                                                btnLabel="Export"                                                                
                                                                handleChange={handleAccntChange}
                                                            />
                                                            
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            {
                                                                isNewAccntImport &&     <>
                                                                                            Account Types : &nbsp;
                                                                                            <AutocompleteSelect 
                                                                                                menuItems={accntsType}  
                                                                                                placeholder={'accounts'}
                                                                                                size="small"
                                                                                                width="300px"
                                                                                                btnLabel="Export"                                                                        
                                                                                                handleChange={handleAccntTypeChange}
                                                                                            />
                                                                                        </>
                                                            }
                                                        </Grid>
                                                        
                                                        <ExportGrid item xs={2} >
                                                            <YellowBtn 
                                                                size="small" label="EXPORT" labelColor="black" width="100px" margin="0px 0px 5px 0px" 
                                                                handleclick={handleExportBtnClick}    
                                                            />                                                                
                                                        </ExportGrid>
                                                    </Grid>
                                                </BrowseDiv>    : <></>             
                        }
                        <TableDiv>
                            <NameDiv>                                                                                                
                                TRANSACTION_TABLE                                                
                            </NameDiv>
                            <NonEditTB tbHeader={selectedTBHeader} tbContent={selectedTBContent} />
                        </TableDiv>

                        <CustomDialog 
                            open={openDialog} cancelClick={handleCancelClick} okClick={handleOkClick} 
                            title={'Alert!'}
                            content={'Are you sure you want to import transactions to a new account?'} 
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
    display : flex;
    align-items : center;
    margin : 10px;            
    border-radius : 10px;
    padding : 20px;
    padding-bottom : 0px;    
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
`;