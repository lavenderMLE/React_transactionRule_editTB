import * as React from 'react';
import {Link} from 'react-router-dom';

// Images
import LOGO_PATH from '../../../assets/logo/logo.png';
import MOBILE_LOGO from '../../../assets/mobile_logo.png';

// custom components
import { HeaderLangSelPopover } from './headerLangSelPopover';
import { SettingPopover } from './SettingPopover';
import { NotificationList } from './NotificationList';
import { MobileNavbar } from './MobileNavbar';

//  MUI components
import { Box,  List, ListItem , ListItemButton , useMediaQuery , Grid } from '@mui/material'
import { useStyles } from './StylesDiv/header.styles';

//  icons
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';



const menuItemLeft = [
    {
        label : 'Crypto Exchange',
        path : '/cryptoexchange'
    },
    {
        label : 'Futures Trading',
        path : '/futures-trading'
    },
    {
        label : 'Buy Crypto',
        path : '/buy-crypto'
    },
    {
        label : 'CAX Rewards',
        path : '/cax-rewards'
    },
    {
        label : 'About US',
        path : '/about'
    }
]

const Header = (props) => {

    const match1 = useMediaQuery('(min-width : 1110px)') ;
    const match2 = useMediaQuery('(min-width : 585px)') ;
    const match3 = useMediaQuery('(min-width : 285px)') ;
    const match4 = useMediaQuery('(min-width : 470px)') ;

    const classes = useStyles() ;

    const [ isAlertClicked , setAlertClick ] = React.useState(false) ;
    const [ isMobileNavbarClicked , setMobileNavbar ] = React.useState(false) ;

    const handleAlertClick = () => {
        setAlertClick( !isAlertClicked ) ;
    };
    const handleMobileNavbarClick = () => {
        setMobileNavbar( !isMobileNavbarClicked );                
        console.log( isMobileNavbarClicked , 'is mobile clicked');
    };


    return (
        <>
            <Box className={classes.root}>
                {/* <Link to="/">
                    <Box 
                        component='img' 
                        src={ match2 ? LOGO_PATH : MOBILE_LOGO }
                        className={classes.logo}  
                    />
                </Link> */}

                <Grid container className={classes.menuContainer}>            
                    {
                        match1 &&   <Grid item xs={8} >
                                        <List className={classes.mainMenu}>
                                            {/* {
                                                menuItemLeft.map((element, index) => (                            
                                                    <Link to={element.path} key={index}>
                                                        <ListItem  >
                                                                {element.label}
                                                        </ListItem>
                                                    </Link>
                                                    )
                                                )
                                            } */}
                                        </List>                                        
                                    </Grid>                                    
                    }

                    <Grid item xs={ match1 ? 4 : 12} className={classes.secondMenuGrid}>
                        <List className={classes.mainMenu}>
                            {
                                match4 &&   <>                                
                                                <Link to='/wallet'>
                                                    <ListItem >
                                                        Sign Up
                                                    </ListItem>
                                                </Link>

                                                <Link to='/wallet'>
                                                    <ListItem >
                                                        Log In
                                                    </ListItem>
                                                </Link>                                                
                                            </>
                            }
                            
                            <ListItem onClick={ () => handleAlertClick() }>                                                            
                                {
                                    !isAlertClicked ?  'Profile' : <></>
                                }                                                                
                            </ListItem>                                                                                       
                        </List>
                    </Grid>                
                </Grid>            
            </Box>

            <MobileNavbar isMobileNavbarClicked={isMobileNavbarClicked} handleMobileNavbarClick={handleMobileNavbarClick} />
            
            <NotificationList isAlertClicked={isAlertClicked} />
            {
                isMobileNavbarClicked ?  <div>slf</div> : <></> 
            }
        </>
    
    )
}

export default Header ;