import { useEffect, useRef, useState } from "react";
import NavBar from './navbar';

var UseRef = () => {
  var [text, setText] = useState("");
  var prevText = useRef();
  useEffect(() => {
    prevText.curr = text;
  }, [text]);
  return (
    <section>
      <NavBar/>
      <h1>This is an example of useref</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>My current render is {text}</h2>
      <h3>My Previous text is {prevText.curr}</h3>
    </section>
  );
};
export default UseRef;
