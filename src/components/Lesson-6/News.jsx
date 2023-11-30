import { useState, useEffect } from "react"
import axios from 'axios';
import NewsCard from "./NewsCard";


const News = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData()
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
            setNews(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const filteredData = news.filter((newsData) => {
        if (!search.trim()) {
            return news
        } else if (newsData.title.toLowerCase().includes(search.trim().toLowerCase())) {
            return news
        }
    }).map((news) => (
        < NewsCard key={news.id} data={news} />
    ))

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" value={search} onChange={handleSearch} />
            <div className="news-wrapper">
                {filteredData}
            </div>
        </div>
    )
}

export default News
