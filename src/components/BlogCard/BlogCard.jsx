const BlogCard = (props) => {
  console.log(props);
  if (!props.title) {
    return <h4>The article is not available due to a technical issue</h4>;
  }
  if (props.viewType === "TILE") {
    return (
      <div
        style={{
          width: "300px",
          border: "2px solid black",
          height: "500px",
          overflow: "hidden",
          margin: "10px",
        }}
      >
        <img style={{ maxWidth: "100%" }} src={props.image} />
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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid black",
        margin: "10px",
      }}
    >
      <img
        style={{
          maxWidth: "100px",
        }}
        src={props.image}
      />
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
};

export default BlogCard;
