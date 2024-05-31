import { useNavigate } from 'react-router-dom';
import './Home.css';
import Button from 'react-bootstrap/Button';

const Home = ({ isLoggedIn, firstName }) => {
    const navigate = useNavigate()

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        navigate('/signup')
    }

    const welcome =  firstName ? <p>Welcome Back, {firstName}</p> :''
    return (
        <div className="Home">
            <h2 className='Home-Jobly'>Jobly</h2>
            <p className='Home-text'>All the jobs in one, convenient place</p>
            {
                isLoggedIn 
                    ?
                    welcome
                    :
                    <div className='Home-Buttons'>
                        <form className='Home-LoginButton'
                            onSubmit={handleLoginSubmit}>
                            <button className='Home-Button btn btn-primary'><p>Log in</p></button>
                        </form>
                        <form className='Home-SignUpButton'
                            onSubmit={handleSignUpSubmit}>
                            <button className='Home-Button btn btn-primary'><p>Sign up</p></button>
                        </form>
                    </div>
            }
        </div>
    )
}

export default Home