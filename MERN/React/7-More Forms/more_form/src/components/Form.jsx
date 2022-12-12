import React, { useState } from 'react'

const Form = (props) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [titleError, setTitleError] = useState("");

  const handel_Fname = (e) => {
    setFname(e.target.value);
    if (e.target.value.length < 1) {
      setFname("First Name is required.");
    } else if (e.target.value.length < 3) {
      setFname('First Name must be at least 3 characters');
    } else {
      setFname("");
    }
  }

  const handel_Lname = (e) => {
    setLname(e.target.value);
    if (e.target.value.length < 1) {
      setLname("Last Name is required.");
    } else if (e.target.value.length < 3) {
      setLname('Last Name must be at least 3 characters');
    } else {
      setLname("");
    }
  }

  const handel_Email = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmail("Email is required.");
    } else if (e.target.value.length < 3) {
      setEmail('Last Name must be at least 3 characters');
    } else {
      setEmail("");
    }
  }

  // const handle_fnames = (e) => {let x = setFname(e.target.value) < 1 ? setFname("First Name is required.") : setFname('Fname must be at lest 3 characters') }

  return (
    <div>
      <form action='' className='form form-group' onSubmit={ (e) => e.preventDefault() }>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='fname'> First Name</label></td>
              <td><input className='form-control' type="text" value={fname} onChange={handel_Fname} /></td>
              {/* <td> {fname} ? <p style={{color:'red'}}>{ handel_Fname }</p> : {setFname.fname = ''}</td> */}
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

      <div style={{ alignItems: 'center', color: 'black', display: 'flex' }}>
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
