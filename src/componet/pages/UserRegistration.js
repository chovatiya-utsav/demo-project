import React, { useRef, useState } from 'react';
import Hader from '../commonComponet/layout/hader/Hader';
import { useNavigate } from 'react-router';
import '../../styles/homepage-componet/UserRegistration.css';
import { Field, Formik } from 'formik';

const UserRegistration = () => {
    const [userAlreadyExists, setUserAlreadyExists] = useState(null);
    const [imageUrlError, setImageUrlError] = useState(null)
    const [imageUrl, setImageUrl] = useState(null);
    const [passwordShow, setPasswordShow] = useState(false);

    const navigate = useNavigate();
    const fileRef = useRef(null)
    const handelLoginPage = () => {
        navigate('/userLogin')
    }

    const handleKeyDown = (e) => {
        if (e.key === ' ') {
            e.preventDefault();
        }
    };

    const fileUploadFolderHandle = async (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.size < 200000) {
                event.preventDefault();
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result;
                    setImageUrl(base64String);
                    setImageUrlError(null);
                };
                reader.readAsDataURL(file);
            } else {
                console.log("big file")

                setImageUrl(null);
                setImageUrlError("Image size should be less than 200 KB.");
            }
        }
    }

    const toggalPasswordShow = () => {
        setPasswordShow(!passwordShow)
    }

    return (
        <div>
            <Hader />
            <div className='userLogin-Div'>
                <Formik
                    initialValues={{
                        mobilNO: "",
                        userName: "",
                        password: "",
                        email: "",
                        files: ""
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

                        if (!imageUrl) {
                            errors.image = "Image is Required";
                        }
                        return errors;
                    }}


                    onSubmit={(values, { setSubmitting }) => {

                        const registerData = JSON.parse(localStorage.getItem("registerDataValue"));
                        // console.log("registerData", registerData);
                        // console.log("submit value",values)

                        const userData =
                        {
                            "mobilNO": values.mobilNO,
                            "userName": values.userName,
                            "password": values.password,
                            "email": values.email,
                            "imageUrl": imageUrl
                        };


                        if (!registerData) {
                            localStorage.setItem('registerDataValue', JSON.stringify([userData]));
                            navigate('/UserLogin');
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
                        {/* {console.log("image file",Formik)} */}
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
                            <div className="userPassword">
                                <Field className='UserInput' name="password" type={passwordShow ? "text" : "password"} value={Formik.values.password} onChange={Formik.handleChange}></Field>
                                {
                                    Formik.values.password ?
                                        <>
                                            <div className='passwordShowIcone'>
                                                {
                                                    passwordShow ? <i onClick={toggalPasswordShow} className="fa fa-eye-slash" title='Hide'></i> :
                                                        <i onClick={toggalPasswordShow} className="fa fa-eye" aria-hidden="true" title='Show'></i>
                                                }
                                            </div>
                                        </> : null
                                }
                            </div>
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
                        </div>
                        <div className='input-fild'>
                            <label className='inputLable'>upload your profile picture</label>
                            {<span className='error'>{!imageUrl && imageUrlError ? imageUrlError : Formik.errors.image}</span>}
                            <div className='userInputImageDiv'>
                                <input hidden
                                    ref={fileRef}
                                    name="file"
                                    type="file"
                                    id="user-image"
                                    onChange={(e) => fileUploadFolderHandle(e)}
                                    action="image/*" >

                                </input>
                                <button type="button" className='UserInputImageButton' onClick={() => { fileRef.current.click() }}>Uplode</button>
                                {
                                    imageUrl && <div className='user-img'>
                                        <img src={imageUrl} alt="images" title='user image' width="100px" height="100px" />
                                    </div>
                                }
                                {/* {console.log("imageUrl", imageUrl)} */}
                            </div>
                        </div>
                        <span className='error'>{userAlreadyExists}</span>
                        <div className='userFormButton'>
                            <button type='button' className='button Login-button' onClick={handelLoginPage} accept="image/*">Login</button>
                            <button type='submit' className='button Login-Button'  >Sign up</button>
                        </div>
                    </form>)}
                </Formik>
            </div>
        </div>
    );

}
export default UserRegistration;
