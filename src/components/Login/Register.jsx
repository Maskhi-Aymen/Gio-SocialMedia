import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { Form, FormGroup, Card } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
 
const Register = () => {

  const navigate = useHistory();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfrimPassword] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            return;
        }

        try {

          await axios.post("http://localhost:5000/api/users/register", {
              username,
              password,
          },{
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "
            }
          });
          navigate.push('/login');


      } catch(error) {
        console.log(error);
      }
    }



  return (
    <div className="col-6" style={{marginLeft:'130px',marginTop:'150px'}}>
    <div className="card">
          <Form className="form" onSubmit={submitHandler}>
            <center><h2 className="page-header">Creer un Compte</h2></center>
            <FormGroup >
            <div className='registrein'><input type="text" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} className='input' id='username' required /></div>
            </FormGroup>
            <FormGroup >
            <div className='registrein'><input type="password" placeholder='Mot de pace' onChange={(e) => setPassword(e.target.value)} className='input' id='password' required /></div>
            </FormGroup>
            <FormGroup >
              <div className='registrein'><input type="password" placeholder='R-taper Mot de passe' onChange={(e) => setConfrimPassword(e.target.value)} className='input' id='rpassword' required /></div>
            </FormGroup>
            <FormGroup >
            <button className=" btn " style={{ color: 'white' }}>Registre</button>
            </FormGroup>
            <FormGroup >
              <p>Vous avez un compte? <a href="/login" className='form-link'>connecter</a></p>
            </FormGroup>
          </Form>
</div></div>
  )
}

export default Register