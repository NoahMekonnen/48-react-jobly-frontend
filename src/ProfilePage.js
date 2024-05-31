import './ProfilePage.css'

const ProfilePage = ({ formData, handleChange, handleSubmit }) => {
    const { firstName, lastName, email } = formData
    return (
        <div className="ProfilePage">
            {
                <div className='ProfilePage-Form-Container'>
                <form className="ProfilePage-Form"
                    onSubmit={handleSubmit}>
                    <label><b>First Name</b></label>
                    <input name='firstName'
                        className='ProfilePage-Form-FirstName form-control'
                        value={firstName}
                        onChange={handleChange}
                    />
                    <label><b>Last Name</b></label>
                    <input name='lastName'
                        className='ProfilePage-Form-LastName form-control'
                        value={lastName}
                        onChange={handleChange}
                    />
                    <label><b>Email</b></label>
                    <input name='email'
                        className='ProfilePage-Form-Email form-control'
                        value={email}
                        type='email'
                        onChange={handleChange}
                    />
                    <button className='ProfilePage-Form-Button btn btn-primary'>
                        Save Changes
                    </button>
                </form>
                </div>
            }
        </div>
    )
}

export default ProfilePage