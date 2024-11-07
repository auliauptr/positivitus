import img from '../../assets/header__img/img.png';
import star1 from '../../assets/header__img/star1.png';
import star2 from '../../assets/header__img/star2.png';
import icon1 from '../../assets/header__img/icon1.png';
import icon2 from '../../assets/header__img/icon2.png';
import icon3 from '../../assets/header__img/icon3.png';
import icon4 from '../../assets/header__img/icon4.png';
import './header.scss';

const Header = () => {
    return (
        <section className='header'>
            <div className='header__content desktop'>
                <div className='header__content-left'>
                    <h1>Navigating the digital landscape for success</h1>
                    <p>
                        Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button>Book a consultation</button>
                </div>
                <div className='header__content-right'>
                    <img className='mainImg' src={img} alt='' />
                    <img className='star1' src={star1} alt='' />
                    <img className='star2' src={star2} alt='' />
                    <img className='icon1' src={icon1} alt='' />
                    <img className='icon2' src={icon2} alt='' />
                    <img className='icon3' src={icon3} alt='' />
                    <img className='icon4' src={icon4} alt='' />
                </div>
            </div>
            <div className='header__content mobile'>
                <div className='header__content-left'>
                    <h1>Navigating the digital landscape for success</h1>
                    <div className='header__content-right'>
                        <img className='mainImg' src={img} alt='' />
                        <img className='star1' src={star1} alt='' />
                        <img className='star2' src={star2} alt='' />
                        <img className='icon1' src={icon1} alt='' />
                        <img className='icon2' src={icon2} alt='' />
                        <img className='icon3' src={icon3} alt='' />
                        <img className='icon4' src={icon4} alt='' />
                    </div>
                    <p>
                        Our digital marketing agency helps businesses grow and
                        succeed online through a range of services including
                        SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button>Book a consultation</button>
                </div>
            </div>
        </section>
    );
};

export default Header;
