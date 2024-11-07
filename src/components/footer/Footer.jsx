import {
    FaFacebook,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa';
import logo from '../../assets/logo-white.png';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='footer__logo'>
                    <img src={logo} alt='' />
                </div>
                <ul className='footer__lists'>
                    <li>
                        <a href=''>About Us</a>
                    </li>
                    <li>
                        <a href=''>Services</a>
                    </li>
                    <li>
                        <a href=''>Use Cases</a>
                    </li>
                    <li>
                        <a href=''>Pricing</a>
                    </li>
                    <li>
                        <a href=''>Blog</a>
                    </li>
                </ul>
                <div className='footer__links desktop'>
                    <div className='footer__link'>
                        <FaLinkedinIn />
                    </div>
                    <div className='footer__link center'>
                        <FaFacebook />
                    </div>
                    <div className='footer__link'>
                        <FaTwitter />
                    </div>
                </div>
            </div>

            <div className='footer__center'>
                <div className='footer__contact'>
                    <h4>Contact us:</h4>
                    <div className='footer__contact-info'>
                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>
                            Address: 1234 Main St <br /> Moonstone City,
                            Stardust State 12345
                        </p>
                    </div>
                </div>
                <form className='footer__subscribe'>
                    <input type='email' placeholder='Email' />
                    <button>Subcribe to news</button>
                </form>
            </div>
            <div className='footer__links mobile'>
                <div className='footer__link'>
                    <FaLinkedinIn />
                </div>
                <div className='footer__link center'>
                    <FaFacebook />
                </div>
                <div className='footer__link'>
                    <FaTwitter />
                </div>
            </div>
            <hr />
            <div className='footer__bottom'>
                <p>© 2023 Positivus. All Rights Reserved.</p>
                <p>
                    <a href=''>Privacy Policy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
