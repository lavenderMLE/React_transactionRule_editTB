import LOGO_PATH from '../../../assets/logo/logo.png';

import { Box, Link, List, ListItem, Grid, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        borderTop : '3px white solid',
        borderBottom : '20px solid #161a1e',
        "& a" : {
            color : '#b7bdc6',
            textDecoration : 'unset',
        },
        "& ul" : {
            float : 'right',
            paddingTop : '0px',
            ['@media (max-width : 835px)'] : {
                float : 'center !important',
            },
        },
        "& li" : {
            width : '150px'
        }
    },
    footerMenuList : {
        display : 'flex',
        ['@media (max-width : 580px)'] : {
            flexDirection : 'column'
        },
    },
    footerLogo : {
        textAlign : 'center'
    },
    footerBottomGrid : {
        display : 'flex',
        justifyContent : 'center',        
    }
}))

const Img = styled('img')({
    height : '40px'
})
const footerMenuList = [
    {
        label : 'Term of Use',
        path : '/term-of-use',
    },
    {
        label : 'Privacy Policy',
        path : '/privacypolicy',        
    },
    {
        label : 'Cookie Policy',
        path : '/cookiepolicy',
    },
    {
        label : 'E-Sign Consent',
        path : '/esignconsent',
    }
]
const FooterBottom = () => {
    const classes = useStyles() ;

    const match1 = useMediaQuery('(min-width : 835px)') ;

    return (
        <Box className={classes.root}>
            <Box sx={{marginBottom : '20px'}}/>

            <Grid container  >

                <Grid item xs={ match1 ? 4 : 12 } className={classes.footerLogo}>
                    {/* <Img alt='logo' src={LOGO_PATH} /> */}
                </Grid>

                <Grid item xs={ match1 ? 8 : 12 } className={classes.footerBottomGrid}>
                    <List className={classes.footerMenuList}>
                    {
                        footerMenuList.map((element, index) => {
                            return (
                                <ListItem key={index} >
                                    <Link href={element.path} >
                                        {element.label}
                                    </Link>
                                </ListItem>
                            )
                        })
                    }
                    </List>
                </Grid>
                
            </Grid>    

        </Box>
    )
}

export default FooterBottom ;