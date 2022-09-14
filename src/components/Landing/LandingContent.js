import * as React from 'react' ;
import { Grid } from "@mui/material";
import styled from "styled-components";

import { ImportTypeList } from "./components/ImportTypeList";

import { AccountsView } from "./components/AccountsView";
// import { TransactionsView } from './components/TransferView';


const importType = [
    "Accounts & Cust Tables",
    "Old Transactions",
    "Transaction Rule Creation",    
]

export const LandingContent = () => {
    const [ selectedIndex , setSelectedIndex ] = React.useState(0) ;

    return (
        <RootGrid container>
            <GridItem item xs={2}>
                <ImportTypeList 
                    importType={importType} 
                    selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}                    
                />
            </GridItem>

            <GridItem item xs={ 10 }>
            {
                ( () => {
                    switch (selectedIndex) {
                        case 0:
                            return <AccountsView />
                        // case 1:
                        //     return <TransactionsView />                        
                        default :
                            return null
                    }
                })()
            }                                          
            </GridItem>
            
        </RootGrid>        
    )
}

const RootGrid = styled(Grid)`
    height : calc(100vh - 60px);
`;

const GridItem = styled(Grid)`
    
`