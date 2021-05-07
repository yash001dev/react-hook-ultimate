import React from 'react';
import {useForm} from 'react-hook-form';
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { Input } from './components/Input';
import PrimaryButton from './components/PrimaryButton';
import { useHistory } from 'react-router';
import {yupResolver} from "@hookform/resolvers/yup";
import { Header } from './components/Header';
import Typography from '@material-ui/core/Typography';
import * as yup from 'yup';

const schema=yup.object().shape({
    firstName: yup.string().matches(/^([^0-9])$/,'First name should not contain numbers').required('First name is required field'),
    lastName: yup.string().matches(/^([^0-9])$/,'Last name should not contain numbers').required('Last name is required field')
})

export const Step1=()=>{
    const {register,handleSubmit,errors}=useForm({
        mode:"onBlur",  
        resolver:yupResolver(schema)
    });
    const history=useHistory();

    const onSubmit=(data)=>{
        history.push("/step2");
    }

    return (
        <MainContainer>
        <div>
            <Typography component="h2" variant="h5">
                Step 1
            </Typography>
            <Form>
                <Input {...register("firstName")} type="text" label="First Name"  helperText={errors?.firstName?.message}  />
                <Input {...register("lastName")} type="text" label="Last Name" />
                <PrimaryButton>NEXT</PrimaryButton>                 
                
            </Form>
            
        </div>
        </MainContainer>
    )

    return null;
}
export default Step1;