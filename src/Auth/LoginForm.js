import { useNavigate } from 'react-router-dom';
import './LoginForm.css'

const LoginForm = ({ formData, handleChange, handleSubmit, loginErrorStack }) => {

    const navigate = useNavigate()
    const { username, password } = formData
    console.log(typeof loginErrorStack,"stack")
    return (
        <div className="LoginForm">
            <div className='LoginForm-Container'>
                <div className='LoginForm-Text'>Log In</div>
                <form className='LoginForm-Form'
                    onSubmit={(e) => {
                        handleSubmit(e)
                        if (loginErrorStack.length === 0){
                            console.log('successful')
                            navigate('/')
                        }
                    }}>
                    <label htmlFor='username' className='form-label'><b>Username</b></label>
                    <input className="LoginForm-Username form-control"
                        id="username"
                        name='username'
                        value={username}
                        onChange={handleChange} />

                    <label htmlFor='password' className='form-label'><b>Password</b></label>
                    <input className="LoginForm-Password form-control "
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />

                    <button className='LoginForm-Button btn btn-primary'>Submit</button>
                </form>
                {loginErrorStack.length == 0
                ?
                ''
                :
                <div className='LoginForm-Invalid btn btn-danger'>{loginErrorStack}</div>
                }
            </div>
        </div>
    )
}

export default LoginForm