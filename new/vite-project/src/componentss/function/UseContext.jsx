import React from "react";
import Component2 from "./contextComponents/Component2";
 
import NavBar from './navbar';

// eslint-disable-next-line react-refresh/only-export-components
export var ThemeProvider = React.createContext();

var ExamResults = () => {
  return (
    <section>
      <NavBar/>
      <ThemeProvider.Provider value={{ sgpa: "10.00" ,cgpa:"9.58"}}>
        <h1>This is an example of useContext-Parent Component</h1>
        <Component2 />
      </ThemeProvider.Provider>
    </section>
  );
};

export default ExamResults