// import React from "react";
import * as Components from './something';
import React, {useState} from 'react';
import axios from 'axios';
// import { navigate } from '@reach/router';
import { Navigate } from 'react-router-dom';


const SignIn = () => {

    const [formData2, setForm2] = useState({
        name: '',
        email2: '',
        address: '',
        phone: '',
        password3: '',
        password2: '',
      });
    
      const { name, email2, password3, password2, address, phone } = formData2;
    
      const onChange2 = (e) => {
        // e.preventDefault();
        setForm({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmit2 = async (e) => {
        e.preventDefault();
        if (password !== password2) {
          props.setAlert('Passwords do not match', 'error');
        } else {
          props.register({ name, email, password, address, phone });
        }
      };
    
      // If already auth, redirect to dashboard
      if (props.isAuth) {
        return <Navigate to='/' />;
      }


    // ****************************
    const [formData, setForm] = useState({
        email: '',
        password: '',
      });
    
      const { email, password } = formData;
    
      const onChange = (e) => {
        // e.preventDefault();
        setForm({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        props.login(email, password);
      };
    
      // If already auth, redirect to dashboard
      if (props.isAuthenticated) {
        return <Navigate to='/' />;
      }
    

    return(
        <div>
        <Components.Container style={{width:'50%', margin:'0 auto', marginTop:'60px' }}>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form  onSubmit={(e) => {
              onSubmit2(e);
            }}>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type="text" className="form-control" placeholder="username" name="username" onChange={(e) => {
                  onChange2(e);
                }} />
                    {/* {errors.username? <p className="text-danger">{errors.username.message}</p>: ""} */}
                    <Components.Input type="text" className="form-control" placeholder="email" name="email2"   onChange={(e) => {
                  onChange2(e);
                }} />
                    {/* {errors.email? <p className="text-danger">{errors.email.message}</p>: ""} */}
                    <Components.Input type="text" className="form-control" placeholder="address" name="address"   onChange={(e) => {
                  onChange2(e);
                }} />
                   <Components.Input type="text" className="form-control" placeholder="phone" name="phone"   onChange={(e) => {
                  onChange2(e);
                }} />
                    <Components.Input type="password" className="form-control" placeholder="password" name="password3"    onChange={(e) => {
                  onChange2(e);
                }} />
                    {/* {errors.password? <p className="text-danger">{errors.password.message}</p>: ""} */}

                    <Components.Input type="password" className="form-control" placeholder="confirm password" name="password2"    onChange={(e) => {
                  onChange2(e);
                }} />
                    {/* {errors.confirm? <p className="text-danger">{errors.confirm.message}</p>: ""} */}
                   
                    <Components.Button type="submit">Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form onSubmit={(e) => {
              onSubmit(e);
            }}>
                 
                     <Components.Title>Sign in</Components.Title>
                     <Components.Input type="text" className="form-control" placeholder='email' name="email" onChange={(e) => {
                  onChange(e);
                }} />
                     <Components.Input type="password" className="form-control" placeholder='password' name="password"   onChange={(e) => {
                  onChange(e);
                }} />
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    
                     <Components.Button type='submit'>Sigin In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Welcome Back!</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    
                    <Components.GhostButton onClick={() => toggle(true)}>
                        Sign In
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                      <Components.Title>Hello, Friend!</Components.Title>
                      <Components.Paragraph>
                          Enter Your personal details and start journey with us
                      </Components.Paragraph>
                          <Components.GhostButton onClick={() => toggle(false)}>
                              Sigin Up
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthenticated,
    loading: state.auth.loading,
    alerts: state.alert,
  });
  
export default connect(mapStateToProps, { setAlert, removeAlert })(SignIn)

// export default SignIn;