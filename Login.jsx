import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Login = () => {
    return (
        <div className ='ngilo-user'> 
        <div className = 'user-login'>
            <h2>Log In</h2>
            <form>
                <label>Username</label>
                <input/>
                <label>Password</label>
                <input/>
               
            </form>
            <br/>
            <Link key={Home}
                  to= {'/home'}
                  className='user-btn'
            >
                Log In
            </Link>
        </div>
       </div>
    )
}

export default Login