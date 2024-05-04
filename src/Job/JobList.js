import { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { JoblyApi } from '../api';
import { v4 as uuid } from 'uuid';

const JobList = ({username}) =>{
    const [jobs, setJobs] = useState([])

    useEffect(() =>{
        async function getJobs(){
            const res = await JoblyApi.getJobs()
            setJobs(res)
        }
        getJobs()
    },[])

    return (
        <div className = 'JobList'>
            {
            username
            ?
            jobs.map(({id, title, companyName, salary, equity}) => 
            <JobCard key={id}
            id={id}
            title={title} 
            companyName={companyName} 
            salary={salary} 
            equity={equity}/>)
            :
            <h1>401 You are unauthorized</h1>    
            }
        </div>
    )
}

export default JobList