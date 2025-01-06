import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function SignUpForm() {
  var [firstName, setFirstName] = useState('');
  var [lastName, setLastName] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  
  var navigate=useNavigate() 
  var signup = async(event) => {
  event.preventDefault()
  var req= await axios.post("https://fullstackproject-pqcf.onrender.com/signup",{
  firstName:firstName,
  lastName:lastName,
  email:email,
  password:password
   });
   console.log(req);
   navigate('/');
  };

 

  return (
    <>
      <div className="signup-container">
        <h2>Welcome to SignUp page</h2>
        <form onSubmit={signup}>
          <label className="signup">
            First Name:
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label className="signup">
            Last Name:
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label className="signup">
            Email:
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="signup">
            Password:
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
          
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
