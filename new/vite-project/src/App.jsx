import './App.css'
import './assets/css/NavBar.css';
import Home from './componentss/function/Home';
import About from './componentss/function/about';
import Contact from './componentss/function/contact';
import Gallery from './componentss/function/gallery';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './assets/css/Contact.css';
import './assets/css/Login.css';
import './assets/css/SignUp.css'
import UseEffect from './componentss/function/UseState';
import UseRef from './componentss/function/UseRef';
import ExamResults from './componentss/function/UseContext';
import UseMemo from './componentss/function/UseMemo';
import Login from './componentss/function/Login';
import SignUpForm from './componentss/function/SignUp'; 
// import './assets/css/SignUp.css'; // Import the CSS file
// import './assets/css/Login.css'; // Import the CSS file

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup'element={<SignUpForm/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About college="kongu engineering " clg1="kongu arts" clg2 ="kongu naturopathy"/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/use-Effect' element={<UseEffect/>}/>
    <Route path='/use-Ref' element={<UseRef/>}/>
    <Route path='/use-Context' element={<ExamResults/>}/>
    <Route path='/use-Memo' element={<UseMemo/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
  

