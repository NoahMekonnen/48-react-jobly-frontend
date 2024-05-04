import { useNavigate } from 'react-router-dom';

const Home = ({ isLoggedIn, firstName }) => {
    console.log(firstName,"first")
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
            <h2>Jobly</h2>
            <p>All the jobs in one, convenient place</p>
            {
                isLoggedIn 
                    ?
                    welcome
                    :
                    <>
                        <form onSubmit={handleLoginSubmit}>
                            <button>Log in</button>
                        </form>
                        <form onSubmit={handleSignUpSubmit}>
                            <button>Sign up</button>
                        </form>
                    </>
            }
        </div>
    )
}

export default Home