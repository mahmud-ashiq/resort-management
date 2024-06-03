import './Login.css';
import {useState} from 'react';
import axios from 'axios';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async(event) =>{
        event.preventDefault(); 
        const credential = {username, password}; 

        axios.post('http://localhost:3001/user/'+username,username)
        .then(response => console.log(response))
        .catch(err => console.log(err))       
    }
    
    
    return (
               
<div className="body">
    <div className="main">
        <h1>Resort Management</h1>
        <h3>Enter your login credentials</h3>
        <form onSubmit={handleLogin} method="POST">
            <label htmlFor="username">Username: </label>
            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Enter your Username" required />
            <label htmlFor="password"> Password: </label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your Password" required />
            <div className="wrap"> <button type="submit" name="login" id="login">Login</button></div>

        </form>
        <a href="forgetPassword.php" > Forgot password? </a>
    </div>
    </div>

    );
}

export default Login;