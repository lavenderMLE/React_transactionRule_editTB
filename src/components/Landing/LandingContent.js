import * as React from 'react' ;
import { Grid } from "@mui/material";
import styled from "styled-components";

import { ImportTypeList } from "./components/ImportTypeList";

import { AccountsView } from "./components/AccountsView";
import { OldTransactionView } from './components/OldTransactionView';
import { ImportFromNew } from './components/ImportFromNew';
import { RuleCreatFromImported } from './components/RuleCreatFromImported';


const mainList = [
    "Accounts & Cust Tables",
    "Import",    
    "Export",
    "Rule",
]
const importType = [
    "from New",
    "from Old Transactions"
]
const ruleType = [
    "Rule Edit",
    "Creating from imported",
    "Creating from Old transaction",
]


export const LandingContent = () => {
    // for selecting list items
    const [ selectedIndex , setSelectedIndex ] = React.useState(0) ;
    const [ selectedParentItem , setSelectedParItem ] = React.useState('') ;
    const [ selectedImportItem , setImportItem ] = React.useState('') ;
    const [ selectedRuleItem , setRuleItem ] = React.useState('') ;

    //  CSV datas for accounts & cust table
    const [ accnts_tb , setAccntsTb ] = React.useState([]) ;
    const [ accntsName , setAccntsName ] = React.useState([]) ;
    const [ accntsType , setAccntsType ] = React.useState([]) ;

    // CSV data for old transactions table
    const [ transactions_tb , setTransactionsTb ] = React.useState([]) ;

    // CSV data for import from new 
    const [ imported_tb , setImportedTb ] = React.useState([]) ;
    


    return (
        <RootGrid container>
            <GridItem item xs={2}>
                <ImportTypeList 
                    mainList={mainList} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}
                    setSelectedParItem={setSelectedParItem}
                    importType={importType} selectedImportItem={selectedImportItem} setImportItem={setImportItem}
                    ruleType={ruleType} selectedRuleItem={selectedRuleItem} setRuleItem={setRuleItem}
                    
                />
            </GridItem>

            <GridItem item xs={ 10 }>
            {
                ( () => {
                    switch (selectedIndex) {
                        case 0:
                            return <AccountsView 
                                        accnts_tb={accnts_tb} setAccntsTb={setAccntsTb} 
                                        accntsName={accntsName} setAccntsName={setAccntsName} 
                                        accntsType={accntsType} setAccntsType={setAccntsType}  
                                    />
                        case 2:
                            return <></>                      
                        default :
                            return null
                    }
                })()
            }                 
            {
                ( () => {
                    switch (selectedParentItem) {
                        case 'Import':
                            switch (selectedImportItem) {
                                case 0:
                                    return <ImportFromNew
                                                imported_tb={imported_tb} setImportedTb={setImportedTb} accntsName={accntsName} 
                                                accntsType={accntsType}
                                            />
                                case 1:
                                    return <OldTransactionView
                                                transactions_tb={transactions_tb} setTransactionsTb={setTransactionsTb}
                                                accntsName={accntsName} setAccntsName={setAccntsName} accntsType={accntsType}
                                            />  
                            }                            
                        case 'Rule':
                            switch (selectedRuleItem) {
                                case 0:
                                    return <></>
                                case 1:
                                    return <RuleCreatFromImported 
                                                imported_tb={imported_tb} setImportedTb={setImportedTb} accntsName={accntsName} 
                                                accntsType={accntsType}
                                            />
                                case 2:
                                    return <OldTransactionView
                                                transactions_tb={transactions_tb} setTransactionsTb={setTransactionsTb}
                                                accntsName={accntsName} setAccntsName={setAccntsName} accntsType={accntsType}
                                            />  
                            }                                                  
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