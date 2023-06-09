import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Template from "./Template";
import "./style.css";
import Loader from "../Loader";
import notFoundImage from "./notfound.jpeg";

function NewsSection(props) {
  const [arts, setArticles] = useState([]);
  const [totalResults, setTR] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    setLoader(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&pageSize=25&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setTR(data.totalResults);
        setLoader(false);
      });
  };

  // FETCH MORE DATA METHOD
  const fetchMoreData = async () => {
    setPage((page) => page + 1);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&pageSize=20&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(arts.concat(data.articles));
        setTR(data.totalResults);
      });
  };
  return (
    <>
      {!loader ? (
        <div>
          <div className="mt-4 container-fluid mb-4">
            {arts.map((items) => {
              return (
                <div className="card" key={crypto.randomUUID()}>
                  <Template
                    imageUrl={
                      items.urlToImage ? items.urlToImage : notFoundImage
                    }
                    title={items.title ? items.title.slice(0, 60) : ""}
                    desc={
                      items.description ? items.description.slice(0, 100) : ""
                    }
                    lnk={items.url}
                    auth={items.source.name}
                    date={
                      items.publishedAt ? items.publishedAt.slice(0, 10) : ""
                    }
                  />
                </div>
              );
            })}
            <InfiniteScroll
              dataLength={arts.length}
              next={fetchMoreData}
              hasMore={arts.length !== totalResults}
            ></InfiniteScroll>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
NewsSection.defaultProps = {
  category: "general",
};
export default NewsSection;
