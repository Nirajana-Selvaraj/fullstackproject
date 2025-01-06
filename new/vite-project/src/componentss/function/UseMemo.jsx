import { useMemo, useState } from "react";
import NavBar from './navbar';

var slowFunction = (number) => {
  for (let i = 0; i < 10000000000; i++) { /* empty */ }
  return number * 2;
};

var UseMemo = () => {
  var [num, setNum] = useState(0);
  var [theme, updateTheme] = useState(true);
  var darklight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingNumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);
  return (
    <section>
      <NavBar/>
      <h1>this is an useMemo example..</h1>
      <input
        type="Number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => updateTheme(theme = !theme)}>
        Toggle Theme
      </button>
      <h2 style={darklight}>{doublingNumber}</h2>
    </section>
  );
};
export default UseMemo;
