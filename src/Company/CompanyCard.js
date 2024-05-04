import {Link} from 'react-router-dom';


const CompanyCard = ({handle, name, description}) =>{
    return (
        <Link to={handle} className="CompanyCard">
            <h3>{name}</h3>
            <p>{description}</p>
        </Link>
    )
}

export default CompanyCard