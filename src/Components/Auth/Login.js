import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'
import {Button, Tooltip} from '@material-ui/core';
import './User.scss'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userAuth = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    userAuth.login(email, password)
    setEmail('')
    setPassword('')
  }



  return (
    <div>

      <form id='login-container' onSubmit={handleLogin}>

        <div className='intro info'>
          <h3>Welcome! Please Login or Register Below.</h3>
        </div>        

        <section>
          <input
            autoFocus
            className='entry-text'
            type='text'
            autoComplete='username'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='entry-text'
            type='password'
            autoComplete='current-password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        <div id='login-reg-btns-container'>
          <button 
            className='login-style' 
            type='submit'>
              Login
          </button>

          <h3>OR</h3>

          <Link to='/register' >
            <button 
              className='register-style' 
              type='button'>
                Register
            </button>
          </Link>
        </div>


        <section className='about-tool-tip'>
          <Tooltip title='A simple app to track your bills!'>
            <Button>What is this?</Button>
          </Tooltip>
        </section>

      </form>
    </div>
  )
}

export default Login
