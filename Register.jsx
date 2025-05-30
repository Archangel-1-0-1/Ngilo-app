import { useState } from 'react';
import axios from 'axios';
import{ Link } from 'react-router-dom';

const Register = () => {
    const[username, setUsername] = useState ('');
    const[password, setPASSWORD] = useState ('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/static/js/bundle.js:37904:45', {username, password,});
        alert ('Signup successful! Your ID: ' +  res.date.userId);
            } catch (err) {
        alert ('Signup failed:' + err.response.data);
        }
    };
return(
    <div>
         <div className ='ngilo-user'> 
            <div className = 'user-login'>
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <label>Username</label>
                    <input type="text" placeholder ="Username" value={username} onChange={(e) => setUsername (e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder ="Password" value={password} onChange={(e) => setPASSWORD (e.target.value)}/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
         </div>
    </div>
)
}

export default Register