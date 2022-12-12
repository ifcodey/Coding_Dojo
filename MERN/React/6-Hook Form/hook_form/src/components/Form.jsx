import React, { useState } from 'react'

const Form = () => {
  let [fname, setFname] = useState('')
  let [lname, setLname] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [confirmPassword, setConfirmPassword] = useState('')


  return (
    <div>
      <form action='' className='form form-group'>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='fname'> First Name</label></td>
              <td><input className='form-control' type="text" value={fname} onChange={(e) => setFname(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='lname'> Last Name : </label></td>
              <td><input className='form-control' type="text" value={lname} onChange={(e) => setLname(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='email'> Email : </label></td>
              <td><input className='form-control' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='password'> Password : </label></td>
              <td><input className='form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td><label htmlFor='confirmPassword'> Confirm Password : </label></td>
              <td><input className='form-control' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td><input type="submit" value="submit" /></td>
            </tr>
          </tbody>
        </table>
      </form>

      <div style={{ alignItems: 'center' , color:'black' , display:'flex'}}>
        <h3>Your Data</h3>
        <ul>
          <li>{fname}</li>
          <li>{lname}</li>
          <li>{email}</li>
          <li>{password}</li>
        </ul>
      </div>

    </div>
  )
}

export default Form
