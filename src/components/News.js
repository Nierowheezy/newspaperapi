import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsArticle from "./NewsArticle";

const News = () => {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <h1 className="news__header__text">
        News Api App
        <span aria-label="emoji" role="img">
          📝
        </span>
      </h1>
      <div className="all_news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default News;
