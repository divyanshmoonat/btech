import { Link } from "react-router-dom";

import styles from "./BlogCard.module.css";

const BlogCard = (props) => {
  // console.log(props);
  if (!props.title) {
    return <h4>The article is not available due to a technical issue</h4>;
  }
  if (props.viewType === "TILE") {
    return (
      <div className={styles["container-tile"]}>
        <img src={props.image} />
        <div>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
          Author :{" "}
          <b>
            {props.author ? props.author.name : "NA"}
            {/* {
                  props.author?.name
              } */}
          </b>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles["container-list"]} txt-size ${props.viewType === "TILE" ? 'p-20' : 'p-10'}`}>
      {props.image && <img src={props.image} />}

      <div style={{
        display: props.viewType === "LIST" ? "flex": "grid"
      }}>
        <Link to={`/articles/${props.id}`}>
          <h2 className={styles.heading}>{props.title}</h2>
        </Link>
        <p className="padding-txt">{props.body}</p>
        Author :{" "}
        <b>
          {props.author ? props.author.name : "NA"}
          {/* {
                props.author?.name
            } */}
        </b>
      </div>
    </div>
  );
};

export default BlogCard;
