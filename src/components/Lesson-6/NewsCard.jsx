import { Link } from "react-router-dom";

const NewsCard = (props) => {
    const { title, imageUrl, id } = props.data

    return (
        <div className="news-card ">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} />
            <Link to={`/news/${id}`}>Read more</Link>
        </div >
    )
}

export default NewsCard;