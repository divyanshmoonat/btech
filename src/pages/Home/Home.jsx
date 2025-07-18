import { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

const articles = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/500px-Taj_Mahal_%28Edited%29.jpeg",
    title: "Taj Mahal - 8th wonder of the World",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste. Commodi reprehenderit eveniet possimus sapiente dicta ratione libero, quas ab praesentium ut dolore voluptatem voluptatibus minus alias, eius aspernatur veniam",
    author: {
      name: "John",
    },
    createdTime: "",
    isPublished: true,
    isDeleted: false,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/330px-React_Logo_SVG.svg.png",
    title: "ReactJS - A Frontend JavaScript Library",
    body: "ReactJS - Library for Frontend development, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste. Commodi reprehenderit eveniet possimus sapiente dicta ratione libero, quas ab praesentium ut dolore voluptatem voluptatibus minus alias, eius aspernatur veniam",
    createdTime: "",
    isPublished: true,
  },
];

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

  const onViewBtnClick = () => {
    // viewType = (viewType === "LIST") ? "TILE" : "LIST"; // Vanilla JS Variable assignment
    const newViewType = viewType === "LIST" ? "TILE" : "LIST";

    setViewType(newViewType);

    console.log("View btn clicked", viewType);
  };

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
