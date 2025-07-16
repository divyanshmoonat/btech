import BlogCard from "../../components/BlogCard/BlogCard";

const Home = () => {
  /**
   * 1. Create an array of objects/JSON for articles [{image: "", title: "", body: ""},...]
   * 2. Render a list of blogs using blogcard
   */
  return (
    <div>
      {/* Todo : Write the content of Home page */}
      <h2>Home Page</h2>
      <BlogCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/500px-Taj_Mahal_%28Edited%29.jpeg"
        title="Taj Mahal - 8th wonder of the World"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste. Commodi reprehenderit eveniet possimus sapiente dicta ratione libero, <br /> quas ab praesentium ut dolore voluptatem voluptatibus minus alias, eius aspernatur veniam"
        author="John"
      />
      <BlogCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/330px-React_Logo_SVG.svg.png"
        title="ReactJS - A Frontend JavaScript Library"
        body="ReactJS - Library for Frontend development, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste. Commodi reprehenderit eveniet possimus sapiente dicta ratione libero, <br /> quas ab praesentium ut dolore voluptatem voluptatibus minus alias, eius aspernatur veniam"
        author="John"
      />
      <BlogCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/500px-Taj_Mahal_%28Edited%29.jpeg"
        title="Taj Mahal - 8th wonder of the World"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste. Commodi reprehenderit eveniet possimus sapiente dicta ratione libero, <br /> quas ab praesentium ut dolore voluptatem voluptatibus minus alias, eius aspernatur veniam"
        author="John"
      />
      <BlogCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/330px-React_Logo_SVG.svg.png"
        title="ReactJS - A Frontend JavaScript Library"
        body="ReactJS - Library for Frontend development, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste. Commodi reprehenderit eveniet possimus sapiente dicta ratione libero, <br /> quas ab praesentium ut dolore voluptatem voluptatibus minus alias, eius aspernatur veniam"
        author="John"
      />
      <BlogCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/500px-Taj_Mahal_%28Edited%29.jpeg"
        title="Taj Mahal - 8th wonder of the World"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste. Commodi reprehenderit eveniet possimus sapiente dicta ratione libero, <br /> quas ab praesentium ut dolore voluptatem voluptatibus minus alias, eius aspernatur veniam"
        author="John"
      />
      <BlogCard
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/330px-React_Logo_SVG.svg.png"
        title="ReactJS - A Frontend JavaScript Library"
        body="ReactJS - Library for Frontend development, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste. Commodi reprehenderit eveniet possimus sapiente dicta ratione libero, <br /> quas ab praesentium ut dolore voluptatem voluptatibus minus alias, eius aspernatur veniam"
        author="John"
      />
    </div>
  );
};

export default Home;
