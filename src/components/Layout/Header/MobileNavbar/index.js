
import * as React from 'react';
import {Link} from 'react-router-dom';

import { 
    Box , Drawer , List , ListItem , ListItemButton , Divider , useMediaQuery ,
    Collapse
} from "@mui/material";
import {makeStyles} from "@mui/styles";

// icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';



const useStyles = makeStyles((theme) => ({
    paperDrawer : {
        top : '60px !important',

        "& .MuiBackdrop-root" : {
            display : 'none'
        },
        "& .MuiPaper-root" : {
            width : '100vw',
            color :  '#b7bdc6'
        },        
        "& a" : {
            textDecoration : 'unset',
            color : '#b7bdc6'
        },
    },
    paper : {
        top : '60px !important',
        backgroundColor : '#2a2d35 !important'
    }
}))

const mobileFirstMenu = [
    {
        label : 'Crypto Exchange',
        path : '/cryptoexchange'
    },
    {
        label : 'Futures Trading',
        path : '/futurestrading',
    },
    {
        label : 'Buy Crypto',
        path : '/buycrypto',
    },
    {
        label : 'CAX Rewards',
        path : '/caxrewards',        
    },
    {
        label : 'About US',
        path : '/about'
    }
]
const mobileSecondMenu = [
    {
        label : <>
            <AccountBalanceWalletIcon /> &nbsp; Wallet
        </>,
        path : '/wallet',        
    },
    {
        label : <>
            <SettingsIcon /> &nbsp; Setting
        </>,
        path : '',
    },
]
const mobileAuthMenu = [
    {
        label : <>
            <HowToRegIcon /> &nbsp; Sign Up
        </>,
        path : '/signup',
    },
    {
        label : <>
            <LoginIcon /> &nbsp; Log In
        </>,
        path : '/login',
    },
]
const mobileSettingMenu = [
    {
        label : 'Edit Profile',
        path : '/editprofile',
    },
    {
        label : 'Change Password',
        path : '/changepassword',
    },    
]
export const MobileNavbar = (props) => {
    const { isMobileNavbarClicked , handleMobileNavbarClick } =props;

    const [ openSettinginNavbar , setSettingNavbar ] = React.useState(false);
    
    const classes = useStyles()

    const match1 = useMediaQuery('(min-width : 470px)') ;

    const handleVisibleSettingSubmenu = () => {
        setSettingNavbar( !openSettinginNavbar );
    } ;
    const handleSignOutClick = () => {
        handleMobileNavbarClick();
        console.log('signing out')
    } ;

    return(
        <Drawer
            anchor="left"
            open={ isMobileNavbarClicked }
            onClose={ handleMobileNavbarClick }
            className={ classes.paperDrawer }
            classes={{
                paper : classes.paper
            }}
        >            
            <List>
                <ListItem>
                    <Box sx={{width : '100%', textAlign : 'right'}} onClick={ handleMobileNavbarClick } >
                        <Box component="span" >
                            ×
                        </Box>
                    </Box>                        
                </ListItem>
                <Divider />

                {
                    mobileFirstMenu.map((ele, idx) => (
                        <Box key={idx}>
                            <Link to={ele.path} >
                                <ListItemButton onClick={ handleMobileNavbarClick }>
                                    {ele.label}
                                </ListItemButton>
                            </Link>                            
                            <Divider />
                        </Box>                        
                    ))
                }

                {
                    !match1 &&  <>
                                    <Box >
                                        <Link to={mobileSecondMenu[0].path} >
                                            <ListItemButton onClick={ handleMobileNavbarClick }>
                                                {mobileSecondMenu[0].label}
                                            </ListItemButton>
                                        </Link>                            
                                        <Divider />
                                    </Box>       

                                    <Box >
                                        <Link to={mobileSecondMenu[1].path} >
                                            <ListItemButton onClick={ handleVisibleSettingSubmenu }>
                                                {mobileSecondMenu[1].label}
                                                {
                                                    !openSettinginNavbar ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />
                                                }                                                   
                                            </ListItemButton>
                                            <Collapse in={openSettinginNavbar} tiemout="auto" unmountOnExit >
                                                {
                                                    mobileSettingMenu.map((ele, idx) => (
                                                        <>
                                                            <Link to={ele.path} key={idx}>
                                                                <ListItemButton onClick={ handleMobileNavbarClick } sx={{ paddingLeft : '30px'}}>
                                                                    {ele.label}
                                                                </ListItemButton>
                                                            </Link>                            
                                                            <Divider />
                                                        </>
                                                    ))
                                                }

                                                {
                                                    <>                                                    
                                                        <ListItemButton onClick={ handleSignOutClick } sx={{ paddingLeft : '30px'}}>
                                                            Sign Out
                                                        </ListItemButton>
                                                        <Divider />
                                                    </>
                                                }
                                            </Collapse>
                                        </Link>                            
                                        <Divider />
                                    </Box>   
                                </>
                                
                }

                {
                    !match1 &&  mobileAuthMenu.map((ele, idx) => (
                                    <Box key={idx}>
                                        <Link to={ele.path} >
                                            <ListItemButton onClick={ handleMobileNavbarClick }>
                                                {ele.label}
                                            </ListItemButton>
                                        </Link>                            
                                        <Divider />
                                    </Box>   
                                ))
                }
            </List>            
        </Drawer>
    )
};
