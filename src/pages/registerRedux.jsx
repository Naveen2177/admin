import React, { useState, useReducer } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, json, useNavigate } from 'react-router-dom'
import IMG from '../img/register.jpg'

import { useDispatch, useSelector } from 'react-redux'


const RegisterRedux = () => {

  const entity = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('values', email, password, name)
    dispatch({ type: "EMAIL", payload: email })
    dispatch({ type: "NAME", payload: name })
    dispatch({ type: "PASSWORD", payload: password })
    


    if (email.length > 5 && (password === confirmPassword)) {
      let newObj =  {name, email}
      localStorage.setItem('user', JSON.stringify(newObj))
      navigate('/')
    }
    else if (password !== confirmPassword){
       alert('Password does not match')
    }

  }

  return (
    <section className='row'>
      <form id="form" className='regtr col-6 px-5 mt-5 text-center' onSubmit={handleSubmit}>
        <ToastContainer />

        <div className='reg'>

          <div className=''>
            <label for="name" className='gap-2'></label>
            <input type="text" name='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
          </div><br/>

          <div>
            <label for="email"></label>
            <input type="Email" name='mail' placeholder='Enter mail' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div><br/>

          <div>
            <label for="password"></label>
            <input type="Password" name='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div><br/>

          <div>
            <label for="confirmPassword"></label>
            <input type="Password" name='confirmPassword' placeholder='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div><br/>

          <div>
            <button className='log bg-danger rounded' type='submit'>Login</button>
          </div><br/>

        </div>
      </form>

      <div className='col-6 mt-5'>
        <div>
          <img src={IMG} alt='register' />
        </div>
      </div>

    </section>
  )
}

export default RegisterRedux