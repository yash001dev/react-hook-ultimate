import { TextField } from '@material-ui/core';
import { forwardRef, React } from 'react';

export const Input=forwardRef((props)=>{
    return <TextField variant="outlined" margin="normal"  fullWidth {...props} />
})