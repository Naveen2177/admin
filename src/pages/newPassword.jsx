import React from 'react'

const NewPassword = () => {
  return (
    <div className='new text-center' id='password'>

      <h1>New Password</h1>
      <p>Please reate a new password that</p>
      <p>you don't use on anr other site</p>

      <input type="password" placeholder='New Paswword' name="pasword" /><br />

      <input type="password" placeholder='Conform Password' name="password" /><br />

      <button>Change</button>
    </div>
  )
}

export default NewPassword