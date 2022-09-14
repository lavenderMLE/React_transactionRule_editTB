import React, { useEffect } from 'react' ;
import { connect } from 'react-redux';
import Routing from './Routes';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import Header from './Layout/Header/header';
import Footer from './Layout/Footer/footer';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.refresh();

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : '60px'
    },
}))

const Main = (props) => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root} >
            <Header />
            <Routing />
            <Footer />
        </Box>
    )
}


const mapStateToProps = state => ({

}) ;
const mapDispatchToProps = {

} ;
export default connect(mapStateToProps, mapDispatchToProps)(Main) ;