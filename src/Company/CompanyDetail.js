import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CompanyJobCard from './CompanyJobCard';
import { JoblyApi } from '../api';

const CompanyDetail = ({username}) =>{
    const [jobs, setJobs] = useState([])
    const {handle} = useParams()

    useEffect(() =>{
        async function getCompanyInfo(){
            const result = await JoblyApi.getCompany(handle)
            setJobs(() =>result.jobs)
        }
        getCompanyInfo()
    },[])
    return(
        <div className="CompanyDetail"> 
        {
            username
            ?
            jobs && jobs.map(({id, title, salary, equity, companyName}) => 
            <CompanyJobCard key={id} id={id} title={title} salary={salary} equity={equity} />)
            :
            <h1>401 You are unauthorized</h1>
        }
        </div>
    )
}

export default CompanyDetail