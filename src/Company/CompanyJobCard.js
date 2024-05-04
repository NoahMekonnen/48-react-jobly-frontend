import { useContext } from 'react';
import ApplyContext from '../ApplyContext';

const CompanyJobCard = ({ id, title, salary, equity }) => {
    const handleSubmit = useContext(ApplyContext).handleApplySubmit
    const appliedJobs = useContext(ApplyContext).appliedJobs
    return (
        <div id={id} className="CompanyJobCard">
            <h4>{title}</h4>
            <p>Salary: {salary}</p>
            <p>Equity: {equity}</p>
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

export default CompanyJobCard