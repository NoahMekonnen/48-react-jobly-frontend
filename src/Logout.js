import {Navigate} from 'react-router-dom';

const Logout = ({setIsLoggedIn, setUsername}) =>{
    setIsLoggedIn(false)
    setUsername('')
    localStorage.removeItem('token')
    localStorage.removeItem('jobs')

    return(
        <Navigate to='/'/>
    )
}

export default Logout