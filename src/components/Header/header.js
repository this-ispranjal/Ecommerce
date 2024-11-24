import React from 'react';
import logoImage from '../../img/logo.png';
import { Link ,useMatch,useResolvedPath} from "react-router-dom";

// import "../../App.css"
const Header = () => {
    const [toggleBar, setToggleBar] = React.useState(false);

    function CustomLink({to, children, ...props}) {
        const resolvedPath = useResolvedPath(to);
        const isActive = useMatch({path: resolvedPath.pathname, end: true});
        return (
            <li >
                <Link class={isActive? "active":""} to={to} {...props}>
                    {children}
                </Link>
            </li>
        );
    }

    function toggleMenu() {
        setToggleBar(!toggleBar);
    }

    return (
        <section id="header">
        <Link to="/"> <img src={logoImage} className="logo" alt="TitleLogo" /></Link>

        <div>
            <ul id="navbar" className={toggleBar ? "active" : ""}>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <li id="lg-bag"><a href="cart.html"> <i className="fa-solid fa-cart-shopping"></i>
                    </a></li>
                <a href="#" id="close" onClick={toggleMenu}> <i className="fa-solid fa-xmark"></i>
                </a>

            </ul>


        </div>
        <div id="mobile">
            <a href="cart.html"> <i className="fa-solid fa-cart-shopping"></i>
            </a>
            <i id="bar" className="fas fa-outdent" onClick={toggleMenu}></i>
        </div>
    </section>
    );
};

export default Header;