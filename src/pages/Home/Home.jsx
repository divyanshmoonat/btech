import { useState, useEffect } from "react";
import axios from "axios";

import BlogCard from "../../components/BlogCard/BlogCard";

const Home = () => {
  /**
   * 1. Create an array of objects/JSON for articles [{image: "", title: "", body: ""},...]
   * 2. Render a list of blogs using blogcard
   */
  // let viewType = "LIST"; // Normal / Vanilla JS Variable
  // const [ variable-name, setter-function ] = useState(init-value)
  // setter-function(new-value)

  // const [ userName, setUserName ] = useState("John");

  // const [ age, setAge ] = useState(0);

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
      console.log(res.data);
      setArticles(res.data);
    } catch (err) {
      console.log("ERROR CALLING ARTICLES LIST API", err);
    }
  };

  /**
   * Syntax : useEffect
   * useEffect(callback-fn, dep-array);
   * callback-fn -> code to be executed on certain events/conditions
   * dep-array -> The factor which triggers the callback fn
   */

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

  // useEffect(() => {}); // No deps -> Updating phase (componentDidUpdate)

  // useEffect(() => {
  //   console.log("Use effect of view type variable");
  //   // Todo: Write your analytics call here
  // }, [viewType, articles]); // Updating phase

  // fetchArticles();

  return (
    <div>
      {/* Todo : Write the content of Home page */}
      <h2>Home Page</h2>
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
    </div>
  );
};

export default Home;
