
import Header from "../../components/Header/Header";

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

  /**
   * Syntax : useEffect
   * useEffect(callback-fn, dep-array);
   * callback-fn -> code to be executed on certain events/conditions
   * dep-array -> The factor which triggers the callback fn
   */

  // useEffect(() => {}); // No deps -> Updating phase (componentDidUpdate)

  // useEffect(() => {
  //   console.log("Use effect of view type variable");
  //   // Todo: Write your analytics call here
  // }, [viewType, articles]); // Updating phase

  // fetchArticles();

  const onBtnClick = () => {
    console.log("Btn clicked");
  };

  return (
    <div>
      {/* Todo : Write the content of Home page */}
      <h2>Home Page</h2>
      <button onClick={onBtnClick}>Click here</button>
    </div>
  );
};

export default Home;
