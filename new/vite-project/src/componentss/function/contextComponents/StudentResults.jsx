import { useContext } from "react";
import { ThemeProvider } from "../UseContext"; // Added correct import

var StudentResult = () => {
  var Result = useContext(ThemeProvider); // Access context value
  return (
    <section>
      <h3>In Component 4</h3>
      <h2>Your SGPA Result is  {Result.sgpa} and CGPA Result is {Result.cgpa}</h2>
    </section>
  );
};

export default StudentResult;
