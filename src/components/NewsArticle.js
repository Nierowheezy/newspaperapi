import React from "react";
import Moment from "react-moment";

const NewsArticle = ({ data }) => {
  return (
    <div>
      {data ? (
        <div className="news">
          <h1 className="news__title">{data.title}</h1>
          <p className="news__desc">{data.description}</p>
          <span className="news__author">{data.author}</span>
          <br />
          <Moment local>
            <span className="news__published">{data.publishedAt}</span>
          </Moment>
          <span className="news__source">{data.source.name}</span>
        </div>
      ) : (
        "null"
      )}
    </div>
  );
};

export default NewsArticle;
