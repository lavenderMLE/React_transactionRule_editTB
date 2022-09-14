import * as React from 'react' ;
import styled from "styled-components";
import { 
    Table , TableHead , TableBody , TableRow , TableCell ,    
    TablePagination ,
} from "@mui/material";



export const NonEditTB = (props) => {
    const { tbHeader , tbContent } = props;

    const [ page, setPage ] = React.useState(0);
    const [ rowsPerPage , setRowsPerPage ] = React.useState(5);
    const [ tempTBcontent , setTempTBcontent ] = React.useState([]) ;
    
    let isPagenated =  Boolean( parseInt( tbContent.length / rowsPerPage ) ) ;    

    const handleChangePage = (e, newPage) => {
        setPage(newPage);        
    }
    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage( parseInt(e.target.value) );
        setPage(0);
    }

    React.useEffect( () => {
        let temp = tbContent.slice( page * rowsPerPage , page * rowsPerPage + rowsPerPage ) ;
        setTempTBcontent( temp ) ;
        
    } , [ page , rowsPerPage , tbHeader ])


    return (
        <BalanceDiv>                        
            <Table>
                <TableHead>
                    <TableRow >
                        {
                            tbHeader.map((ele, idx) => (
                                <TableCell align='center' size='small' key={idx}>
                                    {ele}
                                </TableCell>
                            ))
                        }                                                                         
                    </TableRow>
                </TableHead>
                <TableBody>
                {                    
                    tempTBcontent.map( (ele, idx) =>(
                        <TableRow key={idx}>
                            {
                                ele.map((item , id ) => (
                                    <TableCell size="small" align="center" key={id}>
                                        {item}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))                    
                }                
                </TableBody>
            </Table>
            <TbPaginationDiv 
                component="div"
                count={ tbContent.length }                
                page={ page }
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}     
                rowsPerPageOptions={[ 5, 10, 15 ]}           
                backIconButtonProps={{ sx : {   
                                                backgroundColor : '#2a2d35 !important', 
                                                pointerEvents: isPagenated ? '' : 'unset !important',
                                                cursor : isPagenated ? '' :'no-drop  !important' ,
                                            } 
                                    }}
                nextIconButtonProps={{ sx : { 
                                                backgroundColor : '#2a2d35 !important', 
                                                pointerEvents: isPagenated ? '' : 'unset !important',
                                                cursor : isPagenated ? '' :'no-drop  !important' ,
                                            }
                                    }}
            />
        </BalanceDiv>
    )
}

const BalanceDiv = styled.div`
    border : 2px solid #303030;
    border-radius : 5px;       
    overflow-x : auto;     

    & .MuiTableCell-root {
        color : #b7bdc6 ;
        font-size : 14px;
        border-bottom : 1px solid #303030;
        cursor : pointer;
        padding : 15px;
    }
    & .MuiTableHead-root {
        background-color : #2a2d35;
        cursor : pointer;
        & .MuiTableCell-root {
            padding : 5px;
            font-weight : bold;
        }
    }
`;

const TbPaginationDiv = styled(TablePagination)`
    color : #b7bdc6;
    & p {
        font-weight : bold !important;
    }
    & svg {
        color : #b7bdc6;
    }
    & .MuiTablePagination-select {
        font-weight : bold ;
    }
`;