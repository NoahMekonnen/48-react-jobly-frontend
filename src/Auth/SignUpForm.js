import { useNavigate } from "react-router-dom"

const SignUpForm = ({formData, handleChange, handleSubmit}) => {
    const navigate = useNavigate()
    const { username, password, firstName, lastName, email } = formData
    return (
        <div className="SignUpForm">
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
                    onChange={handleChange} />

                <label>First Name</label>
                <input name='firstName'
                    value={firstName}
                    onChange={handleChange} />
                <label>Last Name</label>
                <input name='lastName'
                    value={lastName}
                    onChange={handleChange} />

                <label>Email</label>
                <input type='email'
                    name='email'
                    value={email}
                    onChange={handleChange} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm