import { MdClose, MdMenu } from 'react-icons/md';
import logoImg from '../../assets/logo.png';
import './navbar.scss';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__logo'>
                    <img src={logoImg} alt='' />
                </div>
                <div
                    className={`navbar__menu ${isMenuOpen ? 'menu__open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <span className='icon icon-close'>
                            <MdClose />
                        </span>
                    ) : (
                        <span className='icon icon-menu'>
                            <MdMenu />
                        </span>
                    )}
                </div>
                <div className='navbar__contents desktop'>
                    <ul className='navbar__items'>
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
                    <button className='navbar__button'>Request a quote</button>
                </div>

                <div
                    className={`navbar__contents mobile ${
                        isMenuOpen ? 'contents__open' : ''
                    }`}
                >
                    <ul className='navbar__items'>
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
                    <button className='navbar__button'>Request a quote</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
