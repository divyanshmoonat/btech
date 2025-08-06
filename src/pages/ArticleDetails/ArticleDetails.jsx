import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const params = useParams();
  //   console.log(params.articleId);

  const [article, setArticle] = useState({});

  const fetchArticleDetails = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + params.articleId
      );
      //   console.log(res.data);
      setArticle(res.data);
    } catch (err) {
      console.log("ERROR WHILE CALING API", err);
    }
  };

  useEffect(() => {
    fetchArticleDetails();
  }, []);

  return (
    <>
      <h3>Article Details screen - {params.articleId}</h3>
      <h4>{article.title}</h4>
      <p>{article.body}</p>
    </>
  );
};

export default ArticleDetails;
