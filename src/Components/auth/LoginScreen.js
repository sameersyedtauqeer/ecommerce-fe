import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import facebook from "../../assets/Images/SOCIAL-03.svg";
import insta from "../../assets/Images/SOCIAL-04.svg";
import twitter from "../../assets/Images/SOCIAL-05.svg";
import linkedin from "../../assets/Images/SOCIAL-06.svg";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../Redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


const LoginScreen = () => {



  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const { token } = useSelector((state) => state.auth)
  // console.log(token)

  // const isLoggedIn = window.localStorage.getItem('user');

  // useEffect(() => {


  //   if (token && token === "") {
  //     return
  //   }

  // }, [token])


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password
    }
    // console.log("password" , password)
    // console.log("email" , email)
    try {
      const response = await dispatch(userLogin(body)).unwrap();
      console.log("response =====", response)
      if (response?.status == true) {
        navigate("/")
        setEmail("")
        setPassword("")
        Toast.fire({
          icon: 'success',
          title: response?.message
        })
      }
      else {
        Toast.fire({
          icon: 'error',
          title: response?.message
        })
      }
    } catch (error) {
      console.log("errr in login", error)
    }
  }


  return (
    <>
      <section className='bg-login'>
        <div className="container">
          <div className="row justify-content-center">
            <div className='col-md-7'>

              <div className='card border-0 card-shadow mt-5 mb-5'>
                <div className="triangle-topleft">
                </div>
                <div className='text-center '>
                  <h1 className=' fw-600'>Login</h1>
                </div>
                <Form onSubmit={handleLogin} className='p-5'>
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <Form.Group className="mb-3 text-grey pb-3 d-flex align-items-center border-bottom" controlId="formBasicEmail">
                        <i className="fa-solid fa-user"></i>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="name" className='border-0 ' placeholder="User Name" />

                      </Form.Group>
                    </div>

                    <div className="col-md-10">

                      <Form.Group className="mb-3 text-grey pb-3 pt-3 d-flex align-items-center border-bottom" controlId="formBasicEmail">
                        <i className="fa-sharp fa-solid fa-lock"></i>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='border-0 ' placeholder="Password" />

                      </Form.Group>
                    </div>

                    <div className="col-md-10">
                      <h6 className='bg-text text-end'>
                        Forgot Password?
                      </h6>
                    </div>

                    <div className="col-md-10 mt-5">
                      <button type="submit" className='btn-pill rounded-pill px-4 py-3 border-0 w-100'> LOG IN</button>
                    </div>

                    <div className='text-center mt-4 '>
                      <p className='text-capitalize fw-500'>Don't you have an account? <span className='bg-text fw-600'>Register</span></p>
                    </div>

                    <div className='text-center'>
                      <div className="row justify-content-center">
                        <div className="col-md-1 p-0">
                          <img className='p-2' width='100%' src={facebook} alt="" />

                        </div>

                        <div className="col-md-1 p-0">
                          <img className='p-2' width='100%' src={insta} alt="" />

                        </div>


                        <div className="col-md-1 p-0">
                          <img className='p-2' width='100%' src={linkedin} alt="" />

                        </div>

                        <div className="col-md-1 p-0">
                          <img className='p-2' width='100%' src={twitter} alt="" />

                        </div>

                      </div>

                    </div>

                  </div>





                </Form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default LoginScreen