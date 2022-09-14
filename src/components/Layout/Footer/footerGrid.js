import FooterGridEachItem from "./footerGridEachItem";
import FooterGridAuth from "./footerGridAuth";

import { Box , Grid , useMediaQuery } from "@mui/material"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop : '16px',
        paddingBottom : '20px'
    },
    footerGridAuth : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
    },
}))

const footerGridItems = {
    about : {
        title : 'ABOUT CA1EX',
        items : [
            {
                label : 'Fee Info',
                path : '/',
            },
            {
                label : 'Listed Assets',
                path : '/',
            },
            {
                label : 'Refferal',
                path : '/',
            },
            {
                label : 'Job Opportunites',
                path : '/',
            }
        ]
    },
    social : {
        title : 'SOCIAL',
        items : [
            {
                label : 'Twitter',
                path : '/',
            },
            {
                label : 'Facebook',
                path : '/',
            },
            {
                label : 'Instagram',
                path : '/',
            },
            {
                label : 'Linkedin',
                path : '/',
            },            
        ]
    },
    support : {
        title : 'SUPPORT',
        items : [
            {
                label : 'Contract',
                path : '/',
            },            
        ]
    },
    language : {
        title : 'LANGUAGE',
        items : [
            {
                label : 'English',
                path : '/'
            }            
        ]
    }
}

const FooterGrid = () => {
    const classes = useStyles() ;

    const match1 = useMediaQuery('(min-width : 985px)') ;
    const match2 = useMediaQuery('(min-width : 553px)') ;
    const match3 = useMediaQuery('(min-width : 350px)') ;
    

    return (
        <Box className={classes.root}>
            <Grid container spacing={2} >
                <Grid item xs={ match2 ? 4 : 12 } className={classes.footerGridAuth}>
                    <FooterGridAuth />                    
                </Grid>
                <Grid item xs={ match2 ? 8 : 12 } >
                    <Grid container >
                        <Grid item xs={ match1 ? 3 : match3 ? 6 : 12 }>
                            <FooterGridEachItem title={footerGridItems.about.title} items={footerGridItems.about.items} />
                        </Grid>
                        <Grid item xs={ match1 ? 3 : match3 ? 6 : 12 }>
                            <FooterGridEachItem title={footerGridItems.social.title} items={footerGridItems.social.items} />
                        </Grid>
                        <Grid item xs={ match1 ? 3 : match3 ? 6 : 12 }>
                            <FooterGridEachItem title={footerGridItems.support.title} items={footerGridItems.support.items} />                    
                        </Grid>
                        <Grid item xs={ match1 ? 3 : match3 ? 6 : 12 }>
                            <FooterGridEachItem title={footerGridItems.language.title} items={footerGridItems.language.items} />                    
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FooterGrid ;