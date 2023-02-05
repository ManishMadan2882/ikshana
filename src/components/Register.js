import '../index.css'
import icon from '../images/doc.jpg'
import { useState } from 'react';
function Register() {

    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [about,setAbout] = useState('');
    const [role,setRole] = useState('');
    // States for checking the errors
    /* const [ setSubmitted] = useState(false); */
  
   
    const handleUsername = (e) => {
      setUser(e.target.value);
      console.log(username);
     /*  setSubmitted(false); */
    };
   
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
     /*  setSubmitted(false); */
    };

    const handleAbout = (e) => {
        setAbout(e.target.value);
        /* setSubmitted(false); */
      };
      const handleRole = (e) => {
        setRole(e.target.value);
       /*  setSubmitted(false); */
      };
    const handleName = (e) => {
        setName(e.target.value);
       /*  setSubmitted(false); */
      };
   
    // Handling the form submission
    let handleSubmit = async () => {
        
        
        console.log({
            username: username,
            password: password,
            name : name,
            about : about
          });
        try {
           await fetch("/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                     },
            body: JSON.stringify({
              username: username,
              password: password,
              name : name,
              about : about,
              role:role
            }),
          });
          
        
        } catch (err) {
          console.log(err);
        }
       
        return false;
      };
   
    // Showing success message

   
    // Showing error message if error is true
    ;
   
  

    return (

      <div className="flex items-center justify-center min-h-screen bg-gray-100 m-auto w-full">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center">
            <img src={icon} className='w-16' alt='Health'></img>
          </div>
          <h3 className="text-2xl font-bold text-center">Sign Up</h3>
          <div>
            <div className="mt-4">
              <div>
                <label className="block">Name<label>
                    <input type="text" placeholder="Name" onChange={handleName}  value={name} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </label></label></div>
              <div className="mt-4">
                <label className="block" >Select a username<label>
                    <input type="text" placeholder="Username" onChange={handleUsername}  value={username} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </label></label></div>
              <div className="mt-4">
              
                  
                  <div className="mt-4">
                <label className="block">You are a :<label>
                    <select  onChange={handleRole} value={role} type="text" placeholder="Select one" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" >
                    <option value="Doctor">Doctor</option>
                    <option value="Health Worker">Health Worker</option>
                    </select>
                  </label></label></div>
                  <div className='my-6'>
                    <h1>About </h1>
                    <textarea onChange={handleAbout}  value={about} className="border-2 border-gray-400 p-2 w-full textarea textarea-error  " placeholder="Qualifications,Experience, Specialization etc."></textarea>
                  </div>
                <label className="block">Password<label>
                    <input onChange={handlePassword}  value={password} type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </label></label></div>
              
              <div className="flex">
                <a href="/login"><button onClick={handleSubmit} className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                  Account</button></a>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <a className="text-blue-600 hover:underline" href="/login">
                  Log in
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Register