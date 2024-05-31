import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ username }) => {
    return (
        <nav className="NavBar">
            <Link to='/' className="NavBar-Link Jobly">Jobly</Link>
            {
                username ?
                    <div className="NavBar-Group">
                        <Link to='/companies' className="NavBar-Link">Companies</Link>
                        <Link to='/jobs' className="NavBar-Link">Jobs</Link>
                        <Link to='/profile' className="NavBar-Link">Profile</Link>
                        <Link to='/logout' className="NavBar-Link">Logout as {username}</Link>
                    </div>
                    :
                    <div className="NavBar-Group">
                        <Link to='/login' className="NavBar-Link">Login</Link>
                        <Link to='/signup' className="NavBar-Link">Sign Up</Link>
                    </div>


            }
        </nav>
    )
}

export default NavBar