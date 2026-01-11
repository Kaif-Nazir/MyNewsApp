import { Link } from 'react-router-dom'

export default function NewsItem({ theme, title = "Cannot Load Title", description = "Cannot Load Description", imageUrl, newsUrl, author = "Unknown", date = "Unknown", newsSource }) {

    return (
        <div className="card h-100 news-card position-relative">

            <span
                className={`badge rounded-pill ${theme === "dark" ? "bg-light text-dark" : "bg-dark text-light"
                    }`}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: 1
                }}
            >
                {newsSource}
            </span>

            <img src={imageUrl} className="card-img-top news-img" alt="..." />

            <div className={`card-body news-body bg-${theme} text-${theme === "light" ? "dark" : "light"}`}>
                <h5 className="card-title news-title">{title}</h5>

                <p className="card-text news-desc">{description}</p>

                <p className="card-text">
                    <small>
                        <strong>Author</strong>: {author || "Unknown"} <br />
                        <strong>Date</strong>: {new Date(date).toGMTString()}
                    </small>
                </p>

                <div className="news-footer">
                    <Link
                        to={newsUrl}
                        target="_blank"
                        className={`btn btn-sm btn-${theme === "light" ? "dark" : "light"}`}
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>

    )
}