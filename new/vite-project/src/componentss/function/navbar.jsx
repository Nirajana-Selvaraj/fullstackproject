import { Link } from "react-router-dom";
var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul className="ul">
                    <li className="li"><Link to='/home'>Home</Link></li>
                    <li className="li"><Link to='/about'>About</Link></li>
                    <li className="li"><Link to='/gallery'>Gallery</Link></li>
                    <li className="li"><Link to='/use-Effect'>UseEffect</Link></li>
                    <li className="li"><Link to='/use-Ref'>UseRef</Link></li>
                    <li className="li"><Link to='/use-Context'>ExamResults</Link></li>
                    <li className="li"><Link to='/use-Memo'>UseMemo</Link></li>
                    <li className="li"><Link to='/contact'>Contact</Link></li>
                  
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;