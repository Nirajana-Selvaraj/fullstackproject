import NavBar from './navbar';

import {useState} from "react";
const Gallery=()=>{
    var [counter,setCounter]=useState(0);
    function increment(){
        setCounter(counter+1);
    }
    function decrement(){
        setCounter(counter-1);
    }
    function reset(){
        setCounter(0)
    }
    return(
        <section>
            <NavBar/>
        <h1>This is Gallery page.</h1>
        <h2 style={{textAlign:"center"}}>Learning states Concepts</h2>
        <h3>The state of my variable counter {counter}</h3>
        <button onClick={increment}>Increment</button>
        <button onDoubleClick={decrement}>Decrement</button>
        <button onMouseOver={reset}>reset</button>

        </section>
    );
}
export default Gallery