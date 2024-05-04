import { useNavigate } from 'react-router-dom';

const LoginForm = ({formData, handleChange, handleSubmit}) => {

    const navigate = useNavigate()
    const { username, password } = formData
    return (
        <div className="LoginForm">
            <form onSubmit={(e) =>{
                handleSubmit(e)
                navigate('/')
            }}>
                <label>Username</label>
                <input name='username'
                    value={username}
                    onChange={handleChange} />

                <label>Password</label>
                <input type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />

            <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm