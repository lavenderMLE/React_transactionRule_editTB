import * as React from 'react';
import { useStyles } from './StylesDiv/header.lang.modal.styles';
import { LanguageContext } from '../../../utils/Language';
import { languageOptions } from '../../../static/languages';

import { 
    List , Box , InputBase , Grid , Select , ListItem
} from '@mui/material';

import { styled } from '@mui/material/styles';
import TranslateIcon from '@mui/icons-material/Translate';


export const HeaderLangSelPopover = (props) => {    

    const classes = useStyles();
    const customInput = React.useRef(null) ;

    const { userLanguage , userLanguageChange } = React.useContext( LanguageContext ) ;
    const [ currentCur, setCurrentCur ] = React.useState('USD') ;

    const currencies = [
        "USD",
        "EUR"
    ]

    const CustomInput = styled(InputBase)(({theme}) => ({
        '& svg' : {
            color : 'white'
        },
        '& input' : {
            border : 'unset',
            opacity : 1,
            backgroundColor : 'unset',
            paddingBottom : '5px',
            paddingLeft : '3px',
            color : 'white',
            fontSize : '14px',
            fontWeight : 'bold',
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
        '& .MuiInputBase-input': {
            width : '50px',
        },
    })) ;

    const handleLanguageClick = lan => { userLanguageChange(lan) } ;
    const handleCurrencyClick = cur => { setCurrentCur(cur) } ;

    // Get the language option initially.
    React.useEffect( () => {
        let defaultLang = window.localStorage.getItem('rcml-lang') ;
        userLanguageChange( defaultLang ) ;
        console.log('91847928734902873498');

    }, [userLanguageChange])

    // Display the language and currency options.
    React.useEffect( () => {
        customInput.current.children[1].value = userLanguage.toUpperCase() + '/' + currentCur; 
    }, [userLanguage, currentCur])
    
    React.useEffect( () => {
        customInput.current.children[1].value = userLanguage.toUpperCase() + '/' + currentCur;         
    } )

    return (
        <Box className={classes.root}>
            <TranslateIcon className={classes.translateIcon} />
            <Select 
                id="custome-select" input={ <CustomInput ref={customInput} /> } 
            >
                <Box sx={{ width : '300px' }}>
                    <Grid container >
                        <Grid item xs={8} className={classes.lanSelGrid}>
                            <List>
                                <ListItem className={classes.popOverTitle}>
                                    Languages
                                </ListItem>
                                <ListItem button className={classes.popOverItem} >
                                    {languageOptions[userLanguage]}
                                </ListItem>
                                {
                                    Object.entries(languageOptions).map(([id, name]) => {
                                        if ( id !== userLanguage ) {
                                            return (
                                                <ListItem button key={id} className={classes.popOverItem} onClick={() => handleLanguageClick(id)} >
                                                    {name}
                                                </ListItem>
                                            )
                                        }
                                    })                                    
                                }
                            </List>
                        </Grid>
                        <Grid item xs={4} className={classes.curSelGrid}>
                            <List>
                                <ListItem className={classes.popOverTitle}>
                                    Currency
                                </ListItem>
                                <ListItem button className={classes.popOverItem}>
                                    {currentCur}
                                </ListItem>
                                {
                                    currencies.map((ele, idx) => {
                                        if ( ele !== currentCur ) {
                                            return (
                                                <ListItem button key={idx} onClick={() => { handleCurrencyClick(ele) }} className={classes.popOverItem}>
                                                    {ele}
                                                </ListItem>
                                            )
                                        }
                                    })
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Box>

            </Select>

        </Box>
    );
    
}