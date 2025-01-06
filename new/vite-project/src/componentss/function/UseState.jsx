import axios from "axios";
import { useEffect, useState } from "react";
var UseEffect = () => {
  //   var [text, setText] = useState("kongu");
  //   useEffect(()=>{
  //     console.log(text);
  //     setText("KEC");
  //   },[text])
  //   return (
  // <section>
  //   <h1>use effect example</h1>
  //   <input
  //     type="text"
  //     placeholder="Enter your text"
  //     value={text}
  //     onChange={(e) => setText(e.target.value)}
  //   />
  //   <h2>Text Typed is {text}</h2>
  // </section>
  //   );
  var [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {console.log(res.data)
       setPost(res.data)})
      .catch((err) => {console.log(err)});
  },[]);
  return (
    <section>
      <NavBar/>
      <h1>Fetching data from Json placeholder api</h1>
      <h2>posts are </h2>
      
      <ol>
        
       {post.map((data)=>(<li key={data.id}>{data.title}</li>))

       }
      </ol>
    </section>
  );
};
export default UseEffect;
