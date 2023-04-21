import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/for.css'


const ForgetPassword = () => {
    

  return (
    <div className=' text-center'>
        <div>
        <h1>ForgetPassword</h1>
        <p>Enter your email address</p>

        <input type="email" placeholder='Email Address' name="email"/><br/>

        <button >
            <Link to={'/newPassword'} className='sub text-black'>Submit</Link>
        </button>
        </div>

       
    </div>
  )
}

export default ForgetPassword