import { Outlet, Link } from "react-router-dom";

const Layout = ({showHideLinks, setShowHideLinks, setAuth}) => {

    const logout = () =>{
        setShowHideLinks(false);
        setAuth(false);

    }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="nav-link">React</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    {showHideLinks ? 
                    <li className="nav-item">
                        <Link to="/login" onClick={logout} className="nav-link">Logout</Link>
                    </li>
                     :
                    <>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">SignUp</Link>
                    </li>
                    </>
                     
                     }
                </ul>
                
                </div>
            </div>
        </nav>
        <Outlet />
    </>
  )
};

export default Layout;