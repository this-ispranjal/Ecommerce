import logoImage from '../../img/logo.png';
import appLogo from '../../img/pay/app.jpg';
import pay from '../../img/pay/pay.png';
import play from '../../img/pay/play.jpg';
import { Link} from "react-router-dom";

// import "../../App.css"


const Footer = () => {
    return (
        <footer className="section-p1">
        <div className="col">
            <img className="logo" src={logoImage} alt=""/>
            <h4>Contact</h4>
            <p> <strong>Adddress:</strong> 562 Wellington Road, Street 32, San Francisco</p>
            <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Consitions</a>
            <a href="#">Contact us</a>
        </div>

        <div className="col">
            <h4>My Accout</h4>
            <a href="#">Sign In </a>
            <a href="#">View Cart </a>
            <a href="#">My Wishlist </a>
            <a href="#">Trakc My Order </a>
            <a href="#">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src={appLogo} alt=""/>
                <img src={play} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={pay} alt=""/>
        </div>
        <div className="copyright">
            <p>@ 2022, All The Right of Ecommerce Store are
                Has Taken. </p>
            <Link to="/admin/home">rajSharma</Link>
        </div>
    </footer>
    );
};

export default Footer;
