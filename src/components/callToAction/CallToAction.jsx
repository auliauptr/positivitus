import ctaImg from '../../assets/cta_img.svg';
import './callToAction.scss';

const CallToAction = () => {
    return (
        <div className='cta'>
            <div className='cta__wrapper'>
                <div className='cta__content-left'>
                    <h3>Let&apos;s make things happen</h3>
                    <p>
                        Contact us today to learn more about how our digital
                        marketing services can help your business grow and
                        succeed online.
                    </p>
                    <button>Get your free proposal</button>
                </div>
                <div className='cta__content-right'>
                    <img src={ctaImg} alt='' />
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
