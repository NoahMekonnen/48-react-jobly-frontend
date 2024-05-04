import { useState, useEffect, createContext } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home.js';
import CompanyList from './Company/CompanyList.js';
import CompanyDetail from './Company/CompanyDetail.js';
import JobList from './Job/JobList.js';
import LoginForm from './Auth/LoginForm.js';
import SignUpForm from './Auth/SignUpForm.js';
import ProfilePage from './ProfilePage.js';
import NavBar from './NavBar.js';
import { JoblyApi } from './api.js';
import Logout from './Logout.js';
import { jwtDecode } from 'jwt-decode';
import ApplyContext from './ApplyContext.js';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = localStorage.getItem('token') ? jwtDecode(localStorage.getItem('token')).username : ''
  const [username, setUsername] = useState(user)
  const [firstName, setFirstName] = useState('')
  const [appliedJobs, setAppliedJobs] = useState([])

  const INITIAL_SIGN_UP_STATE = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  }

  const [signUpFormData, setSignUpFormData] = useState(INITIAL_SIGN_UP_STATE)

  const handleSignUpChange = (e) => {
    const { name, value } = e.target
    setSignUpFormData({
      ...signUpFormData,
      [name]: value
    })
  }

  const handleSignUpSubmit = async (e) => {
    e.preventDefault()
    async function register() {
      const token = await JoblyApi.register(signUpFormData)
      JoblyApi.token = token
      localStorage.setItem('token', token)
      setUsername(() => jwtDecode(JoblyApi.token).username)
      localStorage.setItem('jobs',JSON.stringify([]))
    }

    await register()

    setIsLoggedIn(true)
    setSignUpFormData(INITIAL_SIGN_UP_STATE)
  }

  const INITIAL_LOG_IN_STATE = {
    username: '',
    password: ''
  }

  const [loginFormData, setLoginFormData] = useState(INITIAL_LOG_IN_STATE)

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginFormData({
      ...loginFormData,
      [name]: value
    })
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    async function login() {
      const token = await JoblyApi.login(loginFormData)
      localStorage.setItem('token', token)
      JoblyApi.token = token
      setUsername(() => jwtDecode(JoblyApi.token).username)
      localStorage.setItem('jobs',JSON.stringify([]))
    }

    await login()

    setIsLoggedIn(true)
    setLoginFormData(INITIAL_LOG_IN_STATE)
  }

  const [profileFormData, setProfileFormData] = useState({
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileFormData({
      ...profileFormData,
      [name]: value
    })
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    const updatedInfo = await JoblyApi.updateUserInfo(username, profileFormData)
    setFirstName(updatedInfo.firstName)

  }

  const handleApplySubmit = async (e) => {
    const { id } = e.target.parentNode
    e.preventDefault()
    JoblyApi.apply(username, id)
    await setAppliedJobs(jobs => [...jobs, id])
  }

  useEffect(() =>{
    console.log(appliedJobs,"effect")
    if(appliedJobs.length==0 && !localStorage.getItem('jobs')){
      localStorage.setItem('jobs',JSON.stringify([]))
    }
    if(appliedJobs.length>0){
      console.log('hi')
      localStorage.setItem('jobs',JSON.stringify(appliedJobs))
    }
  },[appliedJobs])

  useEffect(() => {
    const token = localStorage.getItem('token')
    JoblyApi.token = token
    console.log(localStorage.getItem('jobs'),"input")
    const jobs = JSON.parse(localStorage.getItem('jobs'))
    if(jobs){
      setAppliedJobs(() => jobs)
    }
    async function getInfo() {
      if (username) {
        const data = await JoblyApi.getUserInfo(username)
        const { firstName, lastName, password, email } = data
        setProfileFormData(() => ({ firstName, lastName, password, email }))
        setFirstName(() => firstName)
      }
    }
    if (username) {
      getInfo()
    }
  }, [username])

  return (
    <div className="App">
      <ApplyContext.Provider value={{ handleApplySubmit, appliedJobs }}>
        <HashRouter>
          <NavBar isLoggedIn={isLoggedIn}
            username={username} />
          <Routes>
            <Route path='/' element={<Home
              isLoggedIn={isLoggedIn}
              firstName={firstName} />} />
            <Route path='/companies'
              element={<CompanyList
                username={username} />} />
            <Route path='/companies/:handle'
              element={<CompanyDetail
                username={username} />} />
            <Route path='/jobs'
              element={<JobList
                username={username} />} />
            <Route path='/login'
              element={<LoginForm
                formData={loginFormData}
                handleChange={handleLoginChange}
                handleSubmit={handleLoginSubmit} />}
            />
            <Route path='/signup'
              element={<SignUpForm
                formData={signUpFormData}
                handleChange={handleSignUpChange}
                handleSubmit={handleSignUpSubmit} />}
            />
            <Route path='/profile'
              element={<ProfilePage handleChange={handleProfileChange}
                handleSubmit={handleProfileSubmit}
                formData={profileFormData} />} />
            <Route path='/logout'
              element={<Logout setIsLoggedIn={setIsLoggedIn}
                setUsername={setUsername} />} />
            <Route path='*' element={<Navigate to="/" />}/>
          </Routes>
        </HashRouter>
      </ApplyContext.Provider>

    </div>
  );
}

export default App;
