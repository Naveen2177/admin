import React, { useState} from 'react';

import '../styles/login.css'
import Image from '../img/Logo.png'

import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate()


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const reducer = (state, action) => {
  //   if (action.type === 'EMAIL'){
  //     return{state}
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.length > 0 && password.length > 5) {
      navigate('/')
    }else {
      // toast.error('Invalid cread');
      alert('Invalid cread')
    }

  }
  const handle = () => {
    localStorage.setItem("email", email)
    // localStorage.setItem("password", password)
  }

  return (
    <section className='login-Page row'>

      <form className='col-6' onSubmit={handleSubmit}>
        <ToastContainer />
        <div className=' text-center'>

          <div className='head'>
            <h1 className='text-danger'>AchiversIT Service</h1>
            <h2 className='text-primary'>Admin Console</h2>
            <h3 className='text-danger'>Development</h3>
          </div>

          <div>
            <label ></label>
            <input type="Email" placeholder='Enter email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div><br />

          <div>
            <label></label>
            <input type="Password" placeholder='Enter password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div><br />

          <button className='btn bg-danger' type='submit' onClick={handle}>Sigin</button>

          <div className='p'>
            <p>
              Don't have an account ?
              <Link to={'/registerRedux'}>Register</Link>
            </p>
            <p>
              <Link to={'/forgetPassword'}>Forget Password?</Link>
            </p>
          </div>

        </div>
      </form>

      <div className='img col-6'>
        <div>
          <img src={Image} alt="logo" />
        </div>
      </div>

    </section>
  );
}

export default Login