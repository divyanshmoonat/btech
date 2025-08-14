import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
//   console.log(error);
  if (error.status === 404) {
    return (
      <h1>The page you are looking for is not found, please check the URL</h1>
    );
  }

  if (error.status === 500) {
    return <h1>Internal server error, please try after some time</h1>;
  }
  return (
    <>
      <h1>Something went wrong please try again later</h1>
    </>
  );
};

export default Error;
