import '../index.css'
import { useState } from 'react';
function Login (){
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
   
    // States for checking the errors
    const [ setSubmitted] = useState(false);
  
   
    // Handling the name change
   
    // Handling the email change
    const handleUsername = (e) => {
      setUser(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      
    };
   
    // Handling the form submission
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
           await fetch("/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                     },
            body: JSON.stringify({
              username: username,
              password: password,
              
            }),
          });
          
        
        } catch (err) {
          console.log(err);
        }
      };
   
    // Showing success message

   
    // Showing error message if error is true
    ;
   
    return(
        <div class="flex justify-center  bg-gray-400 m-auto w-screen">  
          <div class="container sm:mt-40  my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
            
            <div class="text-center my-6">
              <h1 class="text-3xl font-semibold text-gray-700">Sign in</h1>
              <p class="text-gray-500">Sign in to access your account</p>
            </div>
            
            <div class="m-6">
              <form class="mb-4">
                <div class="mb-6">
                  <label for="username" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
                  <input type="String" name="username" id="username" onChange={handleUsername} value={username} placeholder="Your Username" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div class="mb-6">
                  <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                    <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                  </div>
                  <input type="password" onChange={handlePassword} value={password} name="password" id="password" placeholder="Your password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div class="mb-6">
                <a href='/doctor'>
                  <button type="button" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Sign in</button></a>
                </div>
                <p class="text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet? 
                  <a href="/register" class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">Sign up</a>.
                </p>
              </form>
              
           
             {/*  <!-- alternate sign-in -->   */}
              
            </div>
          </div>
        </div>);
}
export default Login