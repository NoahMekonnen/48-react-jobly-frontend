import { useNavigate } from "react-router-dom"
import "./SignUpForm.css";

const SignUpForm = ({formData, handleChange, handleSubmit, signUpErrorStack}) => {
    const navigate = useNavigate()
    const { username, password, firstName, lastName, email } = formData
    return (
        <div className="SignUpForm">
            <div className="SignUpForm-Container">
            <div className='LoginForm-Text'>Sign Up</div>
            <form className="SignUpForm-Form"
                onSubmit={(e) =>{
                handleSubmit(e)
                // if (signUpErrorStack.length === 0){
                //     navigate('/')
                // }
            }}>
                <label><b>Username</b></label>
                <input className="SignUpForm-Username form-control"
                    name='username'
                    value={username}
                    onChange={handleChange} />

                <label><b>Password</b></label>
                <input className="SignUpForm-Password form-control"
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange} />

                <label><b>First Name</b></label>
                <input className="SignUpForm-FirstName form-control"
                    name='firstName'
                    value={firstName}
                    onChange={handleChange} />
                <label><b>Last Name</b></label>
                <input className="SignUpForm-LastName form-control"
                    name='lastName'
                    value={lastName}
                    onChange={handleChange} />

                <label><b>Email</b></label>
                <input className="SignUpForm-Email form-control"
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange} />

                <button className="SignUpForm-Button btn btn-primary">Submit</button>
            </form>
            {signUpErrorStack.length == 0
                ?
                ''
                :
                <div className='SignUpForm-Invalid btn btn-danger'>{signUpErrorStack}</div>
                }
            </div>
        </div>
    )
}

export default SignUpForm