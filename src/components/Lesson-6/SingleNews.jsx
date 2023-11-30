import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const SingleNews = () => {
    const [singleNews, setSingleNews] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        singleFetch();
    }, [])


    async function singleFetch() {
        try {
            const response = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
            setSingleNews(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    console.log(singleNews);
    return (
        <div>
            <img src={singleNews.imageUrl} alt={singleNews.title} />
            <h3>{singleNews.summary}</h3>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default SingleNews