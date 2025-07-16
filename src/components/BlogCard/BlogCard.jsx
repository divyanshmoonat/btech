const BlogCard = (props) => {
  // console.log(props);
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
      </div>
    </div>
  );
};

export default BlogCard;
