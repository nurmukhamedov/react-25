import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const myData = await response.json();
            setData(myData);
            setLoading(false);
        } catch (error) {
            setError(error)
        }
    }


    useEffect(() => {
        fetchData();
    }, [url]);


    return { data, loading, error }
}

export default useFetch