import "./css/Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"><img className="logo" src="hexagon.png" width="60" height="52" alt="Logo"/></a>
            <nav>
                <ul className="navbar-links">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Items</a></li>
                </ul>
            </nav>
            <a className="login" href="/login"><button>Log in</button></a>
        </nav>
    );
}