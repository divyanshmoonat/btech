import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  console.log(props);
  const [state, setState] = useState({
    articlesList: [],
    isLoggedIn: false,
    userDetails: {
      name: "",
      email: "",
    },
  }); // Application's common state , NOT THE APP COMPONENT'S LOCAL STATE

  return (
    <AppContext.Provider value={{ state, setState }}>
      {/* Pass the app as child to access context */}
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
