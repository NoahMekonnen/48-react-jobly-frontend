import { useContext } from 'react';
import ApplyContext from '../ApplyContext';

const JobCard = ({ id, title, salary, equity, companyName }) => {
    const handleSubmit = useContext(ApplyContext).handleApplySubmit
    const appliedJobs = useContext(ApplyContext).appliedJobs
    return (
        <div id={id} className="JobCard">
            <h4>{title}</h4>
            <p>{companyName}</p>
            <p>Salary:{salary}</p>
            <p>Equity:{equity}</p>
            {
                appliedJobs.find(jobId => jobId==id)
                ?
                <p>Applied</p>
                :
                <form onSubmit={handleSubmit}>
                    <button>Apply</button>
                </form>
            }
        </div>
    )
}

export default JobCard