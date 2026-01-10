import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';


export default function News({ theme, pageSize = 19, category = "general", country = "us", apiKey }) {

    const [renderNews, newsSet] = useState({
        articles: [],
        page: 1,
        loading: false,
        totalResults: 0
    });

    function handleNextClick() {
        newsSet(prev => ({
            ...prev,
            page: prev.page + 1
        }));
    }
    function handlePrevClick() {
        newsSet(prev => ({
            ...prev,
            page: Math.max(1, prev.page - 1)
        }));
    }
    useEffect(() => {
        async function loadNews() {
            try {
                const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}
                &page=${renderNews.page}&pageSize=${pageSize}`;
                newsSet(prev => ({ ...prev, loading: false }));
                const res = await fetch(url);
                const data = await res.json();
                newsSet(prev => ({
                    ...prev,
                    articles: data.articles || [],
                    loading: true,
                    totalResults: data.totalResults
                }));
            } catch (e) {
                console.error(e);
                newsSet(prev => ({ ...prev, loading: false }));
            }
        }
        loadNews();
    }, [renderNews.page, renderNews.totalResults]);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <h1 className={`text-center text-${theme == "dark" ? "light" : "dark"}`}>Top News Today on {capitalizeFirstLetter(category)}</h1>
            {!renderNews.loading && <Loading />}
            <div className="row">
                {renderNews.loading && renderNews.articles.map((element) => {
                    return (
                        <div className="col-md-3 mx-3 my-3" key={element.url}>
                            <NewsItem theme={theme} title={element.title ? element.title.slice(0, 50) : "No Title"} description={element.description ? element.description.slice(0, 86) : "No Description"}
                                imageUrl={element.urlToImage || "https://www.pngmart.com/files/23/No-PNG-Photo.png"} newsUrl={element.url} author={element.author} date={element.publishedAt} newsSource={element.source.name} />
                        </div>
                    );
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={renderNews.page <= 1} type="button" className="btn btn-success" onClick={handlePrevClick}>&larr; Prev</button>
                <button disabled={renderNews.page >= Math.ceil(renderNews.totalResults / 18)} type="button" className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div >
    )
}