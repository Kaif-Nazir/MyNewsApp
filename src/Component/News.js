import { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News({ setProgress, theme, category = "general"}) {

    const pageSize = 19, country = "us";

    const [renderNews, newsSet] = useState({
        articles: [],
        page: 1,
        loading: true,
        totalResults: 0
    });

    useEffect(() => {
        async function loadNews() {
            try {
                setProgress(10);
                newsSet(prev => ({ ...prev, loading: true }));

                const url =
                    `/.netlify/functions/news?category=${category}` +
                    `&country=${country}&page=${renderNews.page}&pageSize=${pageSize}`;

                const res = await fetch(url);
                setProgress(30);

                const data = await res.json();
                setProgress(70);

                newsSet(prev => ({
                    ...prev,
                    articles:
                        renderNews.page === 1
                            ? data.articles || []
                            : [...prev.articles, ...(data.articles || [])],
                    totalResults: data.totalResults,
                    loading: false
                }));

                setProgress(100);
            } catch (e) {
                console.error(e);
                newsSet(prev => ({ ...prev, loading: false }));
                setProgress(100);
            }
        }

        loadNews();
    }, [renderNews.page, category, country, setProgress]);




    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchData = () => {
        if (renderNews.loading) return;

        newsSet(prev => ({
            ...prev,
            page: prev.page + 1
        }));
    };


    return (
        <>
            <h1 className={`text-center text-${theme === "dark" ? "light" : "dark"}`}>Top News Today on {capitalizeFirstLetter(category)}</h1>
            {renderNews.loading && <Loading />}
            <InfiniteScroll
                dataLength={renderNews.articles.length}
                next={fetchData}
                hasMore={renderNews.articles.length < renderNews.totalResults}
                loader={renderNews.loading && <Loading />}
            >

                <div className="container">
                    <div className="row">
                        {renderNews.articles.map((element) => {
                            return (
                                <div className="col-md-3 mx-5 my-3" key={element.url}>
                                    <NewsItem theme={theme} title={element.title ? element.title.slice(0, 50) + "..." : "No Title"} description={element.description ? element.description.slice(0, 86) + "..." : "No Description"}
                                        imageUrl={element.urlToImage || "https://www.pngmart.com/files/23/No-PNG-Photo.png"} newsUrl={element.url} author={element.author} date={element.publishedAt} newsSource={element.source.name} />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </>
    )
}