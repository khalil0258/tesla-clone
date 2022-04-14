import { createContext, useState } from "react";

const ShowContext = createContext();

export const ShowContextProvider = (props) => {
  const [showNav, setShowNav] = useState(false);
  const showHandler = (bool) => {
    setShowNav(bool);
  };
  return (
    <ShowContext.Provider value={{showNav, showHandler}}>
      {props.children}
    </ShowContext.Provider>
  );
};
export default ShowContext;
