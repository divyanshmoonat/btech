const BlogCard = (props) => {
//   console.log(props);
  if (!props.title) {
    return <h4>The article is not available due to a technical issue</h4>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid black",
        marginBottom: "10px",
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
