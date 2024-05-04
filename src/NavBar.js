import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ username }) => {
    return (
        <nav className="NavBar">
            {
                username ?
                    <>
                        <Link to='/' className="NavBar-Link">Home</Link>
                        <Link to='/companies' className="NavBar-Link">Companies</Link>
                        <Link to='/jobs' className="NavBar-Link">Jobs</Link>
                        <Link to='/profile' className="NavBar-Link">Profile</Link>
                        <Link to='/logout' className="NavBar-Link">Logout as {username}</Link>
                    </>
                    :
                    <>
                        <Link to='/' className="NavBar-Link">Jobly</Link>
                        <Link to='/login' className="NavBar-Link">Login</Link>
                        <Link to='/signup' className="NavBar-Link">Sign Up</Link>
                    </>


            }
        </nav>
    )
}

export default NavBar