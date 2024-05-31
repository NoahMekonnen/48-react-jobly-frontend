import {Link} from 'react-router-dom';
import './CompanyCard.css';


const CompanyCard = ({handle, name, description}) =>{
    return (
        <div to={handle} className="CompanyCard">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default CompanyCard