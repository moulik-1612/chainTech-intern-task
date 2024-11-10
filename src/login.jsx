import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // This function first checks if all required fields are filled. If they are, it compares the entered user data with the stored data. 
    //If the data matches, it grants access to the user's account.

    function handleStorage() {
        const userStoredData = JSON.parse(localStorage.getItem('userData'));

        if(password == '' || email == ''){
            alert('Each field should should be fullfill')
        }else{
        if (email === userStoredData.email && password === userStoredData.password) {
            alert('Login successful');
        } else if (userStoredData && email !== userStoredData.email) {
            alert('Invalid email');
            alert('If you want to edit Account details then visit Manage Account');
        } else {
            alert('Invalid password');
            alert('If you want to edit Account details then visit Manage Account');
        }            
        }
    }

return (
<>
            
<div className="container mt-5" style={{ maxWidth: "400px" }}>
    <h1 className="text-center mb-4">Login Page</h1>
    <form onSubmit={(e) => e.preventDefault()}>

    <div className="form-group mb-3">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"/>
    </div>

    <div className="form-group mb-3">
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"/>
    </div>
                    
    <button onClick={handleStorage} className="btn btn-primary w-100">
        Login
    </button>
                
    </form>
                
    <div className="text-center mt-3">
        
    <NavLink to='/register' className="btn btn-link">
        <h3>Register Yourself</h3>
    </NavLink>                
                    
    <NavLink to='/account' className="btn btn-link">
        <h3>Manage Your Account</h3>
    </NavLink>

    </div>
    
    <div className="text-center mt-5">
        <NavLink to='/'><button className="btn btn-primary">Home</button></NavLink>
    </div>
    

</div>
        </>
    );
}

export default Login;
