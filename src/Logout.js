import {Navigate} from 'react-router-dom';

const Logout = ({setUsername}) =>{
    setUsername('')
    localStorage.removeItem('token')
    localStorage.removeItem('jobs')

    return(
        <Navigate to='/'/>
    )
}

export default Logout