import * as React from 'react';

import { CustomCSVReader } from '../../../shared/ui/Selects/CustomCSVReader';
import SelectComponent from '../../../shared/ui/Selects/SelectComponent';
import { NonEditTB } from '../../../shared/ui/Table/NonEditTB';

import { Grid } from '@mui/material';
import styled from "styled-components";


// const title = "Transfer Balances";
const title = "Import Accounts & Cust Tables"

const tbName = [
    "ACCNT",
    "VEND",
    "CUST",
    "EMP",
    "OTHERNAME",
] ;
var tbHeader = {
    accnt : [],
    vend : [],
    cust : [],
    emp : [],
    otherName : [],
};
var tbContent = {
    accnt : [],
    vend : [],
    cust : [],
    emp : [],
    otherName : [],
};
var accntsName_Type = {
    name : [],
    type : [],
}



export const AccountsView = (props) => {
    
    const { accnts_tb , setAccntsTb } = props ;
    const { accntsName , setAccntsName } = props ;
    const { accntsType , setAccntsType } = props ;

    const [ selectedItem , setItem ] = React.useState(0);    

    const [ selectedTBHeader , setTbHeader ] = React.useState([]) ;
    const [ selectedTBContent , setTbContent ] = React.useState([]) ;

    React.useEffect(() => {
        accnts_tb.map((ele, idx) => {                   
            switch( ele[0] ) {
                case '!ACCNT' :
                    tbHeader.accnt = ele.slice( 1, ele.length ) ;
                    break;
                case 'ACCNT' :                    
                    tbContent.accnt.push( ele.slice( 1, ele.length ) );                                        
                    break;

                case '!CUST' :
                    tbHeader.cust = ele.slice( 1, ele.length ) ;
                    break;
                case 'CUST' :
                    tbContent.cust.push( ele.slice( 1, ele.length ) );
                    break;

                case '!VEND' :
                    tbHeader.vend = ele.slice( 1, ele.length ) ;
                    break;
                case 'VEND' :
                    tbContent.vend.push( ele.slice( 1, ele.length ) );
                    break;

                case '!EMP' :
                    tbHeader.emp = ele.slice( 1, ele.length ) ;
                    break;
                case 'EMP' :
                    tbContent.emp.push( ele.slice( 1, ele.length ) );
                    break;

                case '!OTHERNAME' :
                    tbHeader.otherName = ele.slice( 1, ele.length ) ;
                    break;
                case 'OTHERNAME' :
                    tbContent.otherName.push( ele.slice( 1, ele.length ) );                
                    break;
            }
        })

        // save the accnts name and type
        tbContent.accnt.map((ele, idx) => {
            accntsName_Type.name.push( ele[0] ) ;
            accntsName_Type.type.push( ele[3] ) ;
        }) ;

        var temp_accntsType = [ ...new Set(accntsName_Type.type) ] ;

        setAccntsName( accntsName_Type.name ) ;
        setAccntsType( temp_accntsType ) ;

    }, [ accnts_tb ]) ;

    React.useEffect(() => {
        switch( selectedItem ) {
            case 0 :                
                setTbHeader( tbHeader.accnt ) ;
                setTbContent( tbContent.accnt ) ;
                break;
            case 1 :
                setTbHeader( tbHeader.vend ) ;
                setTbContent( tbContent.vend ) ;
                break;
            case 2 :
                setTbHeader( tbHeader.cust ) ;
                setTbContent( tbContent.cust ) ;
                break;
            case 3 :
                setTbHeader( tbHeader.emp ) ;
                setTbContent( tbContent.emp ) ;
                break;
            case 4 :
                setTbHeader( tbHeader.otherName ) ;
                setTbContent( tbContent.otherName ) ;   
                break;
        }        
        
    } , [ selectedItem , accnts_tb ])

    return (
        <RootDiv>
            <TitleDiv>
                {title}
            </TitleDiv>

            <Box>
                <BrowseDiv>
                    Import : &nbsp;
                    <CustomCSVReader endAdornmentText="Browse" setData={setAccntsTb} />                                    
                </BrowseDiv>
                {
                    accnts_tb.length > 0 ?   <TableDiv>
                                            <NameDiv>
                                                <GridContainer container  >
                                                    <Grid item xs={0.2} />
                                                    <Grid item  xs={4.8} >
                                                        <SelectComponent 
                                                            size="small"
                                                            fullWidth={false}
                                                            menuItems={tbName}
                                                            setItem={setItem}
                                                            width="170px"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={7}>
                                                        {tbName[selectedItem]}_TABLE
                                                    </Grid>
                                                </GridContainer>                        
                                            </NameDiv>
                                            <NonEditTB tbHeader={selectedTBHeader} tbContent={selectedTBContent} />
                                        </TableDiv>
                                        : <></>
                }
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
    padding : 20px;    
    border-radius : 10px;
`;

const TableDiv = styled.div`
    border : 1px solid gray;
    margin : 10px;
    border-radius : 10px;
`;
const NameDiv = styled.div`    
    padding : 5px;    
    border-bottom : 1px solid red;
    font-size : 16px;
    margin-top : 10px;    
`;
const SelectDiv = styled.div`
    margin-left : 20px;
`;

const GridContainer = styled(Grid)`
    display : flex;
    align-items : center;
    font-size : 20px;
`;