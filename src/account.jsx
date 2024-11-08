import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ManageAcc() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Below mention comment allow user to change data of input field
    function handleForm(e) {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    }

    // useEffect get data from localstorage and show in input field as your old data
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData) {
            setUserData(storedData);
        }
    }, []);

    // Below mention function set user data to localstorage in case user made any changes
    function changeData() {
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Your data has been changed');
    }

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h1 className="text-center mb-4">Manage Your Account</h1>
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
                    />
                </div>
                <button onClick={changeData} className="btn btn-primary w-100">
                    Save
                </button>
            </form>
            <div className="mt-4">
                <p className="text-center">
                    <strong>Your Data:</strong><br />
                    Name: {userData.name}<br />
                    Email: {userData.email}<br />
                    Password: {userData.password}
                </p>
            </div>
            <div className="text-center mt-3">
                <NavLink to='/register' className="btn btn-link">
                    <h3>Register Yourself</h3>
                </NavLink>
                <NavLink to='/login' className="btn btn-link">
                    <h3>Login Page</h3>
                </NavLink>
            </div>
        </div>
    );
}

export default ManageAcc;
