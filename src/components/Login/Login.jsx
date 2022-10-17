import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Card } from "reactstrap";
import './login.css'
import { Container, Row, Col } from "reactstrap";

const Login = (props) => {

  const navigate = useHistory();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();


    try {

      const { data } = await axios.post("http://localhost:5000/api/users/login", {
        username,
        password
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "
        }
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate.push('/');

    } catch (error) {
      console.log(error);
    }
  }

  const active = props.active ? 'active' : ''

  return (
    <div className="col-6" style={{marginLeft:'130px',marginTop:'150px'}}>
    <div className="card">
          <Form className="form" onSubmit={submitHandler} >
          <center><h2 className="page-header">Connectez-vous</h2></center>
              <FormGroup className={`sidebar__item-inner ${active}`} >
                <div className='loginin'>
                <input type="text" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} className='input' id='username' required />
                </div>
              </FormGroup>
              <FormGroup className={`sidebar__item-inner ${active}`}>
               <div className='loginin'>
                <input type="password" placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)} className='input' id='password' required />
                </div>
              </FormGroup>
              <FormGroup className={`sidebar__item-inner ${active}`}>
                <div className='loginin'>
                <button className=" btn" >Connecter</button>
                </div>
              </FormGroup>
              <FormGroup >
               <center> <p>Vous n’avez pas de compte? <a href="/register" className='form-link'>s’inscrire</a></p></center>
              </FormGroup>
            </Form>
      </div></div>
  )
}

export default Login