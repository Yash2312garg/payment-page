import logo from './logo.png'
import { Link } from "react-router-dom"
const Navbar=()=>{
    return (
        <nav className="Navbar">
            <ul className="navbar-container">
                <li>
                    <img src={logo} alt="LOGO" width="50px" height="50px"/>
                </li>
                <div className='pages'>
                    <li>
                        <Link to="/features">Features</Link> 
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>    
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>  
                    </li>
                </div>
                <div className='login'>
                <button>
                    Login
                </button>
                <button>
                    Singup
                </button>
                </div>
            </ul>
        </nav>
    )


}
export default Navbar;