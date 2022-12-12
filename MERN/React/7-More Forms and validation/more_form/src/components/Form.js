import React, { useState } from 'react'

const Form = (props) => {
  // the field input.
  let [fname, setFname] = useState('')
  let [lname, setLname] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [confirmPassword, setConfirmPassword] = useState('')

  // the error input.
  let [firstNameError, setFirstNameError] = useState('')
  let [lastNameError, setLastNameError] = useState('')
  let [emailError, setEmailError] = useState('')
  let [passError, setPassError] = useState('')
  let [confirmError, setConfirmError] = useState('')

  // the function validation.
  const handel_Fname = (e) => {
    setFname(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First Name is required.");
    } else if (e.target.value.length < 3) {
      setFirstNameError('First Name must be at least 3 characters');
    } else {
      setFirstNameError("");
    }
  }

  const handel_Lname = (e) => {
    setLname(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last Name is required.");
    } else if (e.target.value.length < 3) {
      setLastNameError('Last Name must be at least 3 characters');
    } else {
      setLastNameError("");
    }
  }

  const handel_Email = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required.");
    } else if (e.target.value.length < 3) {
      setEmailError('Email must be at least 3 characters');
    } else {
      setEmailError("");
    }
  }

  const handlepass = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 8) {
      setPassError("Password must be 8 characters");
    }
  }

  const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPassword("Password must equal");
    } else {
      setConfirmPassword("Password is equal");
    }
  }

  // create a object of new login user 
  const createUser = (e) => {
    e.reventDefault();
    const newUser = { fname, lname, email, password, confirmPassword };
    console.log("Welcome", newUser);
  };

  return (
    <div>
      <form className='form form-group' onSubmit={createUser}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor='fname'> First Name</label></td>
              <td><input className='form-control' type="text" onChange={handel_Fname} /></td>
              <td><p style={{ color: 'red' }}>{firstNameError}</p></td>
            </tr>
            <tr>
              <td><label htmlFor='lname'> Last Name : </label></td>
              <td><input className='form-control' type="text" onChange={handel_Lname} /></td>
              <td><p style={{ color: 'red' }}>{lastNameError}</p></td>
            </tr>
            <tr>
              <td><label htmlFor='email'> Email : </label></td>
              <td><input className='form-control' type="email" onChange={handel_Email} /></td>
              <td><p style={{ color: 'red' }}>{emailError}</p></td>
            </tr>
            <tr>
              <td><label htmlFor='password'> Password : </label></td>
              <td><input className='form-control' type="password" onChange={handlepass} /></td>
              <td><p style={{ color: 'red' }}>{passError}</p></td>
            </tr>
            <tr>
              <td><label htmlFor='confirmPassword'> Confirm Password : </label></td>
              <td><input className='form-control' type="password" onChange={handleConfirmPass} /></td>
              <td><p style={{ color: 'red' }}>{confirmError}</p></td>
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
          <li>The First Name is : {fname}</li>
          <li>The Last Name is : {lname}</li>
          <li>The Email : {email}</li>
          <li>The Password is : {confirmPassword}</li>
          {/* <li>{{ newUser }}</li> */}
        </ul>
      </div>

    </div>
  )
}

export default Form
