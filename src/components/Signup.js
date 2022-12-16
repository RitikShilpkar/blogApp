import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {Form, Button, Alert} from 'react-bootstrap'
import { useUserAuth } from "../context/userAuthContext";
function Signup() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
   
    const [error, seterror] = useState("")
    const {signUp} = useUserAuth();
    const navigate = useNavigate();

    const hamdleOnSubmit = async (e)=>{
         e.preventDefault();
         try {
            await signUp(email,password);
            navigate('/')
         } catch (error) {
            seterror(error.message)
         }
         
    }
  return (
    <>
      <div className="p-4 box container w-50">
        <h2 className="mb-3">Firebase Auth Signup</h2>
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
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
}

export default Signup;
