import React from 'react';
import {useForm} from 'react-hook-form';


export const Step1=()=>{
    const {register,handleSubmit,errors}=useForm();
    const history=useHistory();

    const onSubmit=(data)=>{
        history.push("/step2");
    }

    return (
        <div>
            <h2>Step 2</h2>
            <form>
                <input ref={register} name="firstName" type="text" placeholder="First Name" />
                <input ref={register} name="lastName" type="text" placeholder="Last Name" />
                
            </form>
        </div>
    )

    return null;
}
export default Step1;