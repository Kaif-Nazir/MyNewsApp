import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsItem({ theme, title = "Cannot Load Title", description = "Cannot Load Description", imageUrl, newsUrl, author = "Unknown", date = "Unknown", newsSource }) {

    return (
        <div>
            <div className="card">
                <span
                    className="position-absolute badge rounded-pill bg-black"
                    style={{
                        top: "0",
                        left: "90%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1
                    }}
                >
                    {newsSource}
                </span>

                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className={`card-body bg-${theme} text-${theme === "light" ? "dark" : "light"}`}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small>
                            <strong>Author</strong> = {author} ,{" "}
                            <strong>Date</strong> = {new Date(date).toGMTString()}
                        </small>
                    </p>
                    <Link to={newsUrl} target="_blank" className={`btn btn-sm btn-${theme === "light" ? "dark" : "light"}`}>Read More</Link>
                </div>
            </div>
        </div>
    )
}