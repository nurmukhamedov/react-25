import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const FetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        try {
            let url = 'https://restcountries.com/v3.1/all';

            if (searchTerm.trim()) {
                url = `https://restcountries.com/v3.1/name/${searchTerm}`;
            }

            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setCountries(data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        fetchData();
    }, [searchTerm])

    return (
        <div>

            Search countries

            <input value={searchTerm} onChange={handleSearch} placeholder="search countries" />

            {
                countries.map((country, index) => (
                    <CountryCard key={index} countryData={country} />
                ))
            }

        </div>
    )
}

export default FetchCountries