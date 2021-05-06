import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =makeStyles((theme)=>({
    root:{
        marginTop:'12px'
    }
}))

export const MainContainer=({children,...props}) =>{
    return(
        <Container component="main" maxWidth="xs" {...props}>
            {
                children
            }
        </Container>
    )
}