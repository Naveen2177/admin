import React, { useState, useReducer } from 'react'
import '../styles/reg.css'
import Regi from '../img/register.jpg'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Register = () => {

  const navigate = useNavigate()

  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // const [error, setError] = useState('')

  const actions = {
    NAME: 'name',
    PASSWORD: 'password',
    EMAIL: 'email'
  }

  const reducer = (state, action) => {

    switch (action.type) {

      case actions.NAME:
        return { ...state, name: action.payload }

      case actions.PASSWORD:
        return { ...state, password: action.payload }

      case actions.EMAIL:
        return { ...state, email: action.payload }

      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(reducer, {

    name: '',
    password: '',
    email: ''

  })


  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('state', state)
    const { name, email, password } = state

    // console.log('hello', name, email, password)

    if (email.length > 5 && (password === confirmPassword)) {
      let newObj = { name, email }
      localStorage.setItem('user', JSON.stringify(newObj))
      navigate('/');
    }
    else if (password !== confirmPassword) {
      alert('Password does not match')
    }

  }


  return (
    <section className='reg row '>
      <form id="form" className='regtr col-6' onSubmit={handleSubmit}>

        <div className='form flex-coloum mt-5'>

          <label for="name" className='gap-2'></label>
          <input type="text" name='text' placeholder='Enter name' value={state.name} onChange={(e) => dispatch({ type: actions.NAME, payload: e.target.value })} />

          <label for="email"></label>
          <input type="Email" id="email" name='mail' placeholder='Enter mail' value={state.email} onChange={(e) => dispatch({ type: actions.EMAIL, payload: e.target.value })} />

          <label for="password"></label>
          <input type="Password" name='password' placeholder='Enter password' value={state.password} onChange={(e) => dispatch({ type: actions.PASSWORD, payload: e.target.value })} />

          <label for="confirmPassword"></label>
          <input type="Password" name='confirmPassword' placeholder='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          <div>
            <button className='log bg-danger rounded' type='submit'>Login</button>
          </div>
        </div>
      </form>

      <div className='col-6'>

        <div className='image'>
          <img src={Regi} alt='img' />
        </div>

      </div>
    </section>
  )

}

export default Register