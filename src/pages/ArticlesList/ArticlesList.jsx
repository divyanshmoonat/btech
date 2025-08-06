import { useState, useEffect } from "react";
import axios from "axios";

import BlogCard from "../../components/BlogCard/BlogCard";

const ArticlesList = () => {
  const [viewType, setViewType] = useState("LIST");
  const [articles, setArticles] = useState([]);

  const onViewBtnClick = () => {
    // viewType = (viewType === "LIST") ? "TILE" : "LIST"; // Vanilla JS Variable assignment
    const newViewType = viewType === "LIST" ? "TILE" : "LIST";

    setViewType(newViewType);

    console.log("View btn clicked", viewType);
  };

  const fetchArticles = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //   console.log(res.data);
      setArticles(res.data);
    } catch (err) {
      console.log("ERROR CALLING ARTICLES LIST API", err);
    }
  };

  useEffect(() => {
    console.log("Inside use effect with empty deps");
    // const intervalId = setInterval(() => {
    //   // Todo : Write code you want to execute after every 5 hrs
    // }, 5 * 60 * 60 *1000);
    fetchArticles();
    // return () => {
    //   // Unmounting phase (componentWillUnmount)
    //   clearInterval(interval-id);
    // }
  }, []); // Mounting phase (componentDidMount)

  return (
    <>
      <button onClick={onViewBtnClick}>
        {viewType === "LIST" ? "Tile" : "List"} View
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: viewType === "LIST" ? "column" : "row",
        }}
      >
        {articles
          // .map((article) => <BlogCard image={article.image} title={article.title} body={article.body} />)
          .map((article, index) => (
            <BlogCard
              key={`${article.title}_${index}`}
              {...article}
              viewType={viewType}
            />
          ))}
      </div>
    </>
  );
};

export default ArticlesList;
