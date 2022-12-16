import React, { useState } from "react";
import {Link , useNavigate} from 'react-router-dom'
import { useUserAuth } from "../context/userAuthContext";
import {Form, Button, Alert} from 'react-bootstrap'

function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    const {logIn} = useUserAuth();
    const navigate = useNavigate();

    
    const hamdleOnSubmit = async (e)=>{
        e.preventDefault();
        try {
           await logIn(email, password)
           navigate('/home')
        } catch (error) {
           seterror(error.message)
        }
        
   }
  return (
    <>
  
      <div className="p-4 box w-50 container">
        <h2 className="mb-3">Firebase Auth Login</h2>
        
       {error && <Alert variant="danger">{error}</Alert>}
        
        <Form onSubmit={hamdleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e)=> setemail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e)=> setpassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          {/* <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          /> */}
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}

export default Login;
