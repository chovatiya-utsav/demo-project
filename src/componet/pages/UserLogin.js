import Hader from "../commonComponet/layout/hader/Hader";
import '../../styles/homepage-componet/UserLogin.css';
import { Field, Formik } from 'formik';
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const UserLogin = () => {
  const [userNotFoundErre, setuserNotFoundErre] = useState(null);
  const [registraData, setRegistraData] = useState(null);
  const [passwordShow, setPasswordShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const registraData = JSON.parse(localStorage.getItem("registerDataValue"))
    setRegistraData(registraData)
    // if(registraData){
    //   setUserProfilImage(registraData.imageFile)
    // }
  }, [])

  const handelRegistration = () => {
    navigate('/UserRegistration')
  }

  const toggalPasswordShow = () => {
    setPasswordShow(!passwordShow)
  }
  return (
    <>
      <Hader />
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validate={(value) => {
          let errors = {}

          if (!value.email) {
            errors.email = "Email must be Required"
          } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value.email)) {
            errors.email = "Email is not valid use @gmail.com"
          }

          if (!value.password) {
            errors.password = "Password must be Required"
          }
          return errors
        }}

        onSubmit={(value, { setSubmitting }) => {
          console.log('valu', registraData)
          if (!registraData) {
            setuserNotFoundErre("user not registered please registration must be complete");
          } else {
            const exitData = registraData.find((data) => data.email === value.email)
            if (!exitData) {
              setuserNotFoundErre("user not registered please registration must be complete");
            } else {
              if (exitData.password === value.password) {
                localStorage.setItem('loginUserData', JSON.stringify(exitData));
                navigate('/')
              }else{
                setuserNotFoundErre("Your Password is invalid Please Enter Correct Password");
              }
            }
          }
          setSubmitting(false)
        }}
      >
        {(Formik) => (
          <form onSubmit={Formik.handleSubmit}>
            {console.log(Formik)}
            <div className="form-container">
              <div className='user-img'>
                <img src="https://t3.ftcdn.net/jpg/02/61/90/28/240_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg" alt="USer images" title='user image' />
              </div>
              <div className="inputField">
                <label>Email :</label>
                {Formik.errors.email && Formik.touched.email ? <span className="FieldError"> {Formik.errors.email}</span> : null}
                <Field name="email" type="email" onChange={Formik.handleChange}  ></Field>
              </div>
              <div className="inputField">
                <label >Password :</label>
                {Formik.errors.password && Formik.touched.password ? <span className="FieldError">{Formik.errors.password}</span> : null}
                <div className="userPassword">
                  <Field name="password" type={passwordShow ? "text" : "password"} onChange={Formik.handleChange} ></Field>
                  {
                    Formik.values.password ?
                      <>
                        {
                          passwordShow ?
                            <span onClick={toggalPasswordShow} className="passwordShow">  <i className="fa fa-eye-slash"></i></span>
                            : <span onClick={toggalPasswordShow} className="passwordShow"> <i className="fa fa-eye" aria-hidden="true"></i> </span>
                        }
                      </> : null
                  }
                </div>
                <span className="FieldError">{userNotFoundErre}</span>
              </div>
              <div className="formButton">
                <button onClick={handelRegistration}>registration</button>
                <button type="submit">Login</button>
              </div>
            </div>
          </form>)}
      </Formik >
    </>
  )


}

export default UserLogin;
