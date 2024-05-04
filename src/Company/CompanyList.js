import { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import { JoblyApi } from '../api';
import { v4 as uuid } from 'uuid';

const CompanyList = ({username}) => {

    const [companies, setCompanies] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        async function getCompanies() {
            const result = await JoblyApi.getCompanies()
            setCompanies(result)
        }
        getCompanies();
    }, [])

    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        async function getFilteredCompanies(){
            const result = await JoblyApi.getFilteredCompanies(filter)
            setCompanies(result)
        }
        getFilteredCompanies()
        setFilter('')
    }


    return (
        <div className="CompanyList">
            {username
            ?
            <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Enter Search Item..'
                    value={filter}
                    onChange={handleChange} />
                <button>Search</button>
            </form>

            {companies && companies.map(({ handle, name, description }) =>
                <CompanyCard key={uuid()} handle={handle} name={name} description={description} />)}
                </>
            :
            <h1>401 You are unauthorized</h1>}
        </div>
    )
}

export default CompanyList