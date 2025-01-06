import NavBar from './navbar';

const Contact = () => {
  function handleclick() {
    alert("you visiting this page..");
  }
  const handleclick1=()=>{
    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const msg=document.getElementById("msg");
    if(name!=''||email!=''||msg!=''){
      alert('please fill all fields..');
    }
    else{
    alert("Send the message successfully..");
    }
  }

  return (
    <section>
      <NavBar/>
      <h1>This is Contact page.</h1>
      <button
        className="button"
        onClick={handleclick}
        style={{ textAlign: "center" }}
      >
        {" "}
        click me
      </button>
      <footer className="foot">
        <p>
          <label><strong>
            Name: <input type="text" id="name" placeholder="Enter your name" />
          </strong></label>
        </p>
        <p>
          <label><strong>
            Email: <input type="text" id="email"  placeholder="Enter your email" />
            </strong> </label>
        </p>
        <p>
          <label><strong>
            FeedBack: <input type="text"  id="msg" placeholder="Enter your Message" />
            </strong> </label>
        </p>
        <button
        className="button1"
        onClick={handleclick1}
        style={{ textAlign: "center" }}
      >
        {" "}
        Send 
      </button>
      </footer>
    </section>
  );
};
export default Contact;
