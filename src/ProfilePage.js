

const ProfilePage = ({formData, handleChange, handleSubmit}) =>{
    const {firstName, lastName, email} = formData
    return(
        <div className="ProfilePage">
            {

            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input name='firstName'
                value={firstName}
                onChange={handleChange}
                />
                <label>Last Name</label>
                <input name='lastName'
                value={lastName}
                onChange={handleChange}
                />
                <label>Email</label>
                <input name='email'
                value={email}
                type='email'
                onChange={handleChange}
                />
                <button>Save Changes</button>
            </form>
}
        </div>
    )
}

export default ProfilePage