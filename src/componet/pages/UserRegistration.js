import React, {  useState } from 'react';
import Hader from '../commonComponet/layout/hader/Hader';
import { useNavigate } from 'react-router';
import '../../styles/homepage-componet/UserRegistration.css';
import { Field, Formik } from 'formik';

const UserRegistration = () => {
const [userAlreadyExists,setUserAlreadyExists] = useState(null)
    const navigate = useNavigate();

    const handelLoginPage = () => {
        navigate('/userLogin')
    }

    const handleKeyDown = (e) => {
        if (e.key === ' ') {
            e.preventDefault();
        }
    };
    return (
        <div>
            <Hader />
            <div className='userLogin-Div'>
                <Formik
                    initialValues={{
                        mobilNO: "",
                        userName: "",
                        password: "",
                        email: ""
                    }}
                    validate={(value) => {

                        const errors = {};

                        if (!value.userName) {
                            errors.userName = "User name is Required.";
                        }

                        if (!value.email) {
                            errors.email = "Email is Required.";
                        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value.email)) {
                            errors.email = "Email is not valid use @gmail.com"
                        }

                        if (!value.password) {
                            errors.password = "Password is Required"
                        }

                        if (!value.mobilNO) {
                            errors.mobilNO = "Mobile Number is Required"
                        } else if (isNaN(value.mobilNO)) {
                            errors.mobilNO = "Characters not valid"
                        } else if (value.mobilNO.length < 10) {
                            errors.mobilNO = "Mobile number must be 10 digits."
                        }
                        else if (value.mobilNO.length > 10) {
                            errors.mobilNO = "Mobile number must be 10 digits not more then 10."
                        }
                        return errors;
                    }}


                    onSubmit={(values, validate, { setSubmitting }) => {

                        const registerData = JSON.parse(localStorage.getItem("registerDataValue"));
                        console.log("registerData", registerData);
                        const userData =
                        {
                            "mobilNO": values.mobilNO,
                            "userName": values.userName,
                            "password": values.password,
                            "email": values.email
                        };

                        if (!registerData) {
                            localStorage.setItem('registerDataValue', JSON.stringify([userData]));
                        } else {
                            const existData = registerData.find((item) => item?.email === values.email);
                            if (!existData) {
                                localStorage.setItem('registerDataValue', JSON.stringify([...registerData, userData]));
                                navigate('/UserLogin');
                            } else {
                                setUserAlreadyExists("user already registered please login")
                            }
                        }

                        setSubmitting(false);
                    }}

                >

                    {(Formik) => (<form action="#" className='userLoginForm' onSubmit={Formik.handleSubmit}>
                        <div className='input-fild'>
                            <label className='inputLable'>User Name : </label>
                            {Formik.errors.userName && Formik.touched.userName && <span className='error'>{Formik.errors.userName}</span>}
                            <Field className='UserInput' name="userName" type="text" value={Formik.values.userName} onChange={Formik.handleChange} placeholder="Enter Youer Name"></Field>

                        </div>
                        <div className='input-fild'>
                            <label className='inputLable'>E-Mail</label>
                            {Formik.errors.email && Formik.touched.email && <span className='error'>{Formik.errors.email}</span>}
                            <Field className='UserInput' name="email" type="email" value={Formik.values.email} onChange={Formik.handleChange} placeholder="abc@gamil.com"></Field>

                        </div>
                        <div className='input-fild'>
                            <label className='inputLable'>Password : </label>
                            {Formik.errors.password && Formik.touched.password && <span className='error'>{Formik.errors.password}</span>}
                            <Field className='UserInput' name="password" type="password" value={Formik.values.password} onChange={Formik.handleChange}></Field>
                        </div>
                        <div className='input-fild'>
                            <label className='inputLable'>Mobile NO :</label>
                            {Formik.errors.mobilNO && Formik.touched.mobilNO && <span className='error'>{Formik.errors.mobilNO}</span>}
                            <Field
                                className='UserInput'
                                name="mobilNO"
                                type="tel"
                                value={Formik.values.mobilNO}
                                onChange={Formik.handleChange}
                                onKeyDown={handleKeyDown}
                                placeholder='0000000000'>
                            </Field>
                            <span className='error'>{userAlreadyExists}</span>
                        </div>
                        <div className='userFormButton'>
                            <button type='button' className='button Login-button' onClick={handelLoginPage} >Login</button>
                            <button type='submit' className='button Login-Button'  >Sign up</button>
                        </div>
                    </form>)}
                </Formik>
            </div>
        </div>
    );

}
export default UserRegistration;
