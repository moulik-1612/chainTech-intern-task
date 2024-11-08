import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Registration() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Below mention function allows you to type in input field
    function handleForm(e) {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    }

    // Below mention function first check user are already registered or not and if not then allows to
    // register user after user fullfill all the input field
    function storeUserData() {

        if((JSON.parse(localStorage.getItem('userData')) === null)){
        if(userData.name == '' || userData.email == '' || userData.password == ''){
        alert('Please fill the entire form')
        }else{
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Your account has been registered')
        navigate('/login')
        }        
        }else{
            alert('you is already registered')
            alert('If you want to edit details then go to Manage Account')
        }
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Registration Form</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        placeholder="Name"
                        value={userData.name}
                        onChange={handleForm}
                        name="name"
                        className="form-control"
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleForm}
                        name="email"
                        className="form-control"
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleForm}
                        name="password"
                        className="form-control"
                        autoComplete="off"
                        required
                    />
                </div>
                <button onClick={storeUserData} className="btn btn-primary w-100">
                    Register
                </button>
            </form>
            <div className="text-center mt-4">
                <NavLink to='/login' className="btn btn-link">
                    <h3>Login Page</h3>
                </NavLink>
                <NavLink to='/account' className="btn btn-link">
                    <h3>Manage Your Account</h3>
                </NavLink>
            </div>
        </div>
    );
}

export default Registration;
