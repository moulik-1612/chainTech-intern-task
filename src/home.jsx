import { NavLink } from "react-router-dom";

function HomePage() {
// this page direct user to different pages
return (
    <div className="container text-center mt-5">

    <h1 className="mb-4">Home Page of the Website</h1>

    <div className="d-flex flex-column align-items-center">
        <NavLink to='/register' className="btn btn-primary mb-3" style={{ width: '200px' }}>
            Register Yourself
        </NavLink>

        <NavLink to='/login' className="btn btn-secondary mb-3" style={{ width: '200px' }}>
            Login Page
        </NavLink>

        <NavLink to='/account' className="btn btn-info" style={{ width: '200px' }}>
            Manage Account
        </NavLink>
            </div>

    <h3 className="mt-5">Resgister if you are a new user</h3>

        </div>
    );
}

export default HomePage;
