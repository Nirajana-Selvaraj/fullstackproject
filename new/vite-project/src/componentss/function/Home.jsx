import NavBar from './navbar';

var Home=()=>{
    var st={
        color:"blue",
        textDecoration:"underline",
        textAlign: "center" 
    }

    return(
        <header>
            <NavBar/>
        <h2 style={st}>This is Home page</h2>
        <h2 id='idSEg'>Testing styling</h2>
        <p className="box-model">Hello</p>    
        </header>
    );
}
export default Home;